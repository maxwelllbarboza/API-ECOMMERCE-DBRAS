export interface IJConfig {
    getJwtSecret(): string;
    getJwtExpirationTime(): string;
    getJwtRefreshSecret(): string;
    getJwtRefreshExpirationTime(): string;
  }