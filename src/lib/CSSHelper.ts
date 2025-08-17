import { createHash } from 'node:crypto';

/*
Allowed Characters:
  Alphanumeric characters: A-Z, a-z, 0-9
  Hyphens: -
  Underscores: _

Starting Characters:
  Class names must not start with a digit (0-9) or a hyphen followed by a digit.
  Valid starting characters include letters (A-Z, a-z) and underscores (_).
*/
// 52 + 10 + 2 = 64
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
console.assert(characters.length == 64, characters);

export function representClassNames(params: string | string[] | { [name: string]: string }): any {
  if (typeof params === 'string') {
    if (process.env.WEBMAKE_BUILD_TYPE === 'Debug')
      return params;
    const hash = createHash('sha1'); // , params, 'buffer');
    hash.update(params);

    const buffer = hash.digest();
    let result = "";
    for (var i = 0; i < 16; i++) {
      const mask = (i ? 0x3f : 0x1f);
      result += characters.charAt(buffer[i] & mask);
    }

    return result;
  }

  if (Array.isArray(params)) {
    const result = [];
    for (var i = 0; i < params.length; i++) {
      result.push(representClassNames(params[i]));
    }
    return result;
  }

  const result: any = {};
  for (const name in params) {
    result[name] = representClassNames(params[name]);
  }

  return result;
}
