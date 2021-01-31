function bottom() {
  if (document.querySelector("#recipient-title").value.length <= 25) {
    if (
      document.querySelector("#recipient-title").value &&
      document.querySelector("#recipient-content").value
    )
      return document.getElementById("myForm").submit();
    else alert("Os campos não podem ser vázio");
  } else alert("O titulo só pode ter entre 1 à 25 caracteres");
}

const page_max = Math.floor(
  document.querySelector("#display").scrollHeight / 600
);
let page = 0;

document.querySelector(".page").innerText = `Page ${page + 1}/${page_max + 1}`;

function scroll_plus() {
  if (page < page_max) {
    page += 1;
    let scrollpage = page * 600;
    document.querySelector("#display").scroll(0, scrollpage);

    document.querySelector(".page").innerText = `Page ${page + 1}/${
      page_max + 1
    }`;
  }
}

function scroll_minus() {
  if (page > 0) {
    page -= 1;
    let scrollpage = page * 600;
    document.querySelector("#display").scroll(0, scrollpage);

    document.querySelector(".page").innerText = `Page ${page + 1}/${
      page_max + 1
    }`;
  }
}
