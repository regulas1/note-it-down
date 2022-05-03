export const toggleBlur = () => {
   const blurValue = "blur(4px)";

   const blurBody = () => {
      const body = document.querySelector<HTMLElement>("body");
      if (body) {
         body.style.filter = blurValue;
      }
   };

   const unBlurBody = () => {
      const body = document.querySelector<HTMLElement>("body");
      if (body) {
         body.style.filter = "";
      }
   };

   const isBodyBlur = () => {
      const body = document.querySelector<HTMLElement>("body");
      if (body?.style.filter === blurValue) {
         return true;
      }
      return false;
   };

   if (isBodyBlur()) {
      unBlurBody();
   } else {
      blurBody();
   }
}