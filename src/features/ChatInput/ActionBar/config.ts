// import STT from '../STT';
import Clear from './Clear';
import FileUpload from './FileUpload';
import History from './History';
import ModelSwitch from './ModelSwitch';
// import Temperature from './Temperature';
import Token from './Token';
import Tools from './Tools';

export const actionMap = {
  clear: Clear,
  fileUpload: FileUpload,
  history: History,
  model: ModelSwitch,
  // stt: STT,
  // temperature: Temperature,
  token: Token,
  tools: Tools,
} as const;

type ActionMap = typeof actionMap;

export type ActionKeys = keyof ActionMap;

type getActionList = (mobile?: boolean) => ActionKeys[];
// !mobile && 'stt', 'temperature'
// we can make these action lists configurable in the future
export const getLeftActionList: getActionList = () =>
  ['model', 'fileUpload', 'history', 'tools', 'token'].filter(Boolean) as ActionKeys[];

export const getRightActionList: getActionList = () => ['clear'].filter(Boolean) as ActionKeys[];
