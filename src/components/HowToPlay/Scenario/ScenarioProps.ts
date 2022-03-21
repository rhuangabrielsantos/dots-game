export interface ScenarioProps {
  callback: (scenario: ScenarioEnum) => void
}

export enum ScenarioEnum {
  FIRST_SCENARIO = 'First click in the line',
  SECOND_SCENARIO = 'First point earned',
  THIRD_SCENARIO = 'End game',
}
