import { ColorUtils, SystemColorToken } from '../map/utils';

type CanvasRenderingContext2DInterface = Pick<CanvasRenderingContext2D, 'beginPath' | 'lineTo' | 'moveTo' | 'stroke'>;
type Color = string | CanvasGradient;

export class BasicDrawer {
   private readonly _ctx: CanvasRenderingContext2D;

   constructor(private readonly canvas: HTMLCanvasElement) {
      this._ctx = this.canvas.getContext('2d')!;
      this.onResize();
   }

   public onResize(): void {
      this._ctx.textAlign = 'center';
      this._ctx.textBaseline = 'middle';
   }

   public line(x1: number, y1: number, x2: number, y2: number, width: number): void {
      this.lineWidth = width;
      this._ctx.beginPath();
      this._ctx.moveTo(x1, y1);
      this._ctx.lineTo(x2, y2);
      this._ctx.stroke();
   }

   public square(x: number, y: number, side: number, color: Color, fill = true): void {
      if (fill) {
         this.fillStyle = color;
      } else {
         this.strokeStyle = color;
      }
      this._ctx.beginPath();
      this._ctx.rect(x, y, side, side);
      this._ctx[fill ? 'fill' : 'stroke']();
   }

   public circle(x: number, y: number, radius: number, color: Color, fill = true): void {
      if (fill) {
         this.fillStyle = color;
      } else {
         this.strokeStyle = color;
      }
      this._ctx.beginPath();
      this._ctx.arc(x, y, radius, 0, Math.PI * 2);
      this._ctx[fill ? 'fill' : 'stroke']();
   }

   public text(text: string, x: number, y: number, fontSize: number): void {
      this.fillStyle = ColorUtils.getTokenValue(SystemColorToken.TEXT);
      this.fontSize = fontSize;
      this._ctx.fillText(text, x, y);
   }

   public clear(): void {
      this._ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   }

   public createRadialGradient(
      x: number,
      y: number,
      r: number,
      ...colorStops: Array<[number, string]>
   ): CanvasGradient {
      const gradient = this._ctx.createRadialGradient(x, y, 0, x, y, r);
      colorStops.forEach(([offset, color]) => {
         gradient.addColorStop(offset, color);
      });
      return gradient;
   }

   public set strokeStyle(color: Color) {
      if (this._ctx.strokeStyle !== color) {
         this._ctx.strokeStyle = color;
      }
   }

   public set fillStyle(color: Color) {
      if (this._ctx.fillStyle !== color) {
         this._ctx.fillStyle = color;
      }
   }

   public set lineWidth(width: number) {
      if (this._ctx.lineWidth !== width) {
         this._ctx.lineWidth = width;
      }
   }

   public set lineCap(cap: CanvasLineCap) {
      if (this._ctx.lineCap !== cap) {
         this._ctx.lineCap = cap;
      }
   }

   public set alpha(a: number) {
      if (this._ctx.globalAlpha !== a) {
         this._ctx.globalAlpha = a;
      }
   }

   private set fontSize(size: number) {
      const font = size + 'px Serif';
      if (this._ctx.font !== font) {
         this._ctx.font = font;
      }
   }

   public get ctx(): CanvasRenderingContext2DInterface {
      return this._ctx;
   }
}
