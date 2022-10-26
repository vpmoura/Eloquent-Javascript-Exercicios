let cerquilha = "";
let tamanho = 8;
for (i = 1; i <= tamanho; i++) {
  if (i % 2 === 0) {
    cerquilha += " #";
  } else {
    cerquilha += "#";
  }
  for (j = 1; j <= tamanho - 1; j++) {
    cerquilha += " #";
  }
  console.log(cerquilha);
  cerquilha = "";
}
