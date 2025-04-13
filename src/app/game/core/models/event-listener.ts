export class EventListener<K extends keyof DocumentEventMap> {
   constructor(private readonly type: K, private readonly listener: (this: Document, ev: DocumentEventMap[K]) => any) {
      document.addEventListener(type, listener);
   }

   public destroy(): void {
      document.removeEventListener(this.type, this.listener);
   }
}
