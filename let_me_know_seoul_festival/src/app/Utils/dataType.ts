export interface RootInterface {
  value: Value;
}

export interface Value {
  status: string;
  value: DataType;
  reason?: any;
  _response: Response;
  _debugInfo?: any;
}

export interface DataType {
  culturalEventInfo:{
    list_total_count: number;
    RESULT: RESULT;
    row: Row[];
  }
}

export interface Row {
  CODENAME: string;
  GUNAME: string;
  TITLE: string;
  DATE: string;
  PLACE: string;
  ORG_NAME: string;
  USE_TRGT: string;
  USE_FEE: string;
  PLAYER: string;
  PROGRAM: string;
  ETC_DESC: string;
  ORG_LINK: string;
  MAIN_IMG: string;
  RGSTDATE: string;
  TICKET: string;
  STRTDATE: string;
  END_DATE: string;
  THEMECODE: string;
  LOT: string;
  LAT: string;
  IS_FREE: string;
  HMPG_ADDR: string;
}

export interface RESULT {
  CODE: string;
  MESSAGE: string;
}