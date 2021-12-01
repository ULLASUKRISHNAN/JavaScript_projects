document.getElementById('filterInput').addEventListener('keyup', () => {
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  let ul = document.getElementById('names');
  let li = ul.querySelectorAll('li.collection-item');
  let li_Header = ul.querySelectorAll('li.collection-header');
  li.forEach((item) => {
    let a = item.getElementsByTagName('a')[0];
    let compare = a.innerHTML.toUpperCase().startsWith(filterValue);
    item.style.display = compare ? 'block' : 'none';
  });

  li_Header.forEach((item) => {
    let h5 = item.getElementsByTagName('h5')[0];
    item.style.display = h5.innerHTML
      .toUpperCase()
      .startsWith(filterValue.slice(0, 1))
      ? 'block'
      : 'none';
  });
});
