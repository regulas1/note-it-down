export class BlurHelper {
   private blurValue: string;

   constructor(blurValue: string) {
      this.blurValue = blurValue;
   }

   private blurBody() {
      const body = document.querySelector<HTMLElement>("body");
      if (body) {
         body.style.filter = this.blurValue;
      }
   }

   private unBlurBody() {
      const body = document.querySelector<HTMLElement>("body");
      if (body) {
         body.style.filter = "";
      }
   }

   private isBodyBlur() {
      const body = document.querySelector<HTMLElement>("body");
      if (body?.style.filter === this.blurValue) {
         return true;
      }
      return false;
   }

   public toggleBlur() {
      if (this.isBodyBlur()) {
         this.unBlurBody();
      } else {
         this.blurBody();
      }
   }
}