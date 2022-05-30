/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UseCase {
  run(...params: any): Promise<any>;
}
