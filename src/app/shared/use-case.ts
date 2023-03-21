import { Observable } from 'rxjs';

export interface UseCase<TIn, TOut> {
  execute(params?: TIn): Observable<TOut>;
}

export interface UseCaseIn<TIn> {
  execute(params?: TIn): void;
}
