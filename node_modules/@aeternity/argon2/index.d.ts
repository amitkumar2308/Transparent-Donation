export const argon2d: 0;
export const argon2i: 1;
export const argon2id: 2;

export function hash(
  plain: Uint8Array | string,
  options: {
    hashLength?: number;
    timeCost?: number;
    memoryCost?: number;
    type?: 0 | 1 | 2;
    salt?: Uint8Array | string;
  }
): Promise<Uint8Array>;
