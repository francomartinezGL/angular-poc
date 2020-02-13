export class PipeLine {
  id: number;
  name: string;
  draft?: boolean;
  internalShortName: string;
  internalLongName: string;
  pipeLineStartDate: {
    localDate: string;
    localTime: string;
    localTimezone: string;
  };
  pipeLineEndDate: {
    localDate: string;
    localTime: string;
    localTimezone: string;
  };
  pipeLineTypeId: number;
  pipeLineType?: {
    id: number;
    name: string;
    code: string;
  };
  primaryFuelTypeId: number;
  primaryFuelType?: {
    id: number;
    name: string;
    code: string;
  };
  secondaryFuelTypeId: number;
  secondaryFuelType?: {
    id: number;
    name: string;
    code: string;
  };
  optionsSwitch: boolean;
  hasDuctBurners: boolean;
  hasOption1: boolean;
  hasOption2: boolean;
  hasOption3: boolean;
  hasOption4: boolean;
  hasOption5: boolean;
  hasOption6: boolean;
  radioOption1: boolean;
  radioOption2: boolean;
  radioOption3: boolean;

  constructor(data: any = {}) {
    this.name = data.name || "";
    this.internalShortName = data.internalShortName || "";
    this.internalLongName = data.internalLongName || "";
    this.pipeLineStartDate = data.pipeLineStartDate || {};
    this.pipeLineEndDate = data.pipeLineEndDate || {};
    this.pipeLineTypeId = data.pipeLineTypeId || null;
    this.pipeLineType = data.pipeLineType || {};

    this.primaryFuelTypeId = data.primaryFuelTypeId || null;
    this.primaryFuelType = data.primaryFuelType || {};
    this.secondaryFuelTypeId = data.secondaryFuelTypeId || null;
    this.secondaryFuelType = data.secondaryFuelType || {};
    this.hasDuctBurners = data.hasDuctBurners || null;
    this.optionsSwitch = data.optionsSwitch || true;
    this.hasOption1 = data.hasOption1 || null;
    this.hasOption2 = data.hasOption2 || true;
    this.hasOption3 = data.hasOption3 || null;
    this.hasOption4 = data.hasOption4 || true;
    this.hasOption5 = data.hasOption5 || null;
    this.hasOption6 = data.hasOption6 || null;
    this.radioOption1 = data.radioOption1 || true;
    this.radioOption2 = data.radioOption2 || false;
    this.radioOption3 = data.radioOption3 || true;
  }
}
