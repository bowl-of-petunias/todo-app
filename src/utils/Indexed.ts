export interface Indexed<T> {
  [key: number]: Readonly<T>;
}