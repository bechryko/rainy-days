declare global {
   interface Array<T> {
      /**
       * Removes the element from the array, and returns the index of its first occurrence, like `indexOf`.
       * @param element The value to remove from the array.
       */
      remove(element: T): number;
   }
}

export function extendArray() {
   Array.prototype.remove = function (element: unknown) {
      const index = this.indexOf(element);
      if (index !== -1) {
         this.splice(index, 1);
      }
      return index;
   };
}
