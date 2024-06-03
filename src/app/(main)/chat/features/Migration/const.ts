export const MIGRATE_KEY = 'migrated';
export enum UpgradeStatus {
  START,
  UPGRADING,
  UPGRADED,
  UPGRADE_FAILED,
}

export const V1DB_NAME = 'FastGPT';
export const V1DB_TABLE_NAME = 'FAST_GPT';

export interface MigrationError {
  message: string;
  stack: string;
}
