let binarySearch = (arr, item) => {

   let low = 0;
   let hight = arr.length - 1;


   while (low <= hight) {
      let mid = Math.round((low + hight) / 2);
      let guess = arr[mid];

      if (guess === item) {
         console.log('Урра!!' + guess)
         break
      } else if (guess > item) {
         hight = mid - 1;
      } else {
         low = mid + 1;
      }
   }
   return null
}
