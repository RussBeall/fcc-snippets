function convertHTML(str) {
  let result = str;
  result = result.replace(/[&]/g, '&amp;');
  result = result.replace(/[<]/g, '&lt;');
  result = result.replace(/[>]/g, '&gt;');
  result = result.replace(/["]/g, '&quot;');
  result = result.replace(/[']/g, '&apos;');

  return result;
}

//convertHTML("Dolce & Gabbana");

console.log(convertHTML("Dolce & Gabbana")); // should return Dolce & amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return Hamburgers & lt; Pizza & lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return Sixty & gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return Stuff in & quot; quotation marks & quot;.
console.log(convertHTML("Schindler's List")); // should return Schindler & apos; s List.
console.log(convertHTML("<>")); // should return & lt;& gt;.
console.log(convertHTML("abc")); // should return abc.
