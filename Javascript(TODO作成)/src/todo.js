let add_btn = document.querySelector(".add_btn");
let list = document.querySelector(".list");
let comp_list = document.querySelector(".complete_list");

add_btn.addEventListener("click", function () {
  let input_val = document.querySelector(".form");
  var todo = input_val.value;
  createIncompleteList(todo);
  input_val.value = "";
});

const deleteFromIncompleteList = (target, list) => {
  list.removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const comp_btn = document.createElement("button");
  const del_btn = document.createElement("button");
  span.innerText = text;
  comp_btn.innerText = "完了";
  del_btn.innerText = "削除";

  li.classList.add("item");
  li.appendChild(span);
  li.appendChild(comp_btn);
  li.appendChild(del_btn);
  list.appendChild(li);

  comp_btn.addEventListener("click", function () {
    const comp_target = comp_btn.parentNode;
    const li = document.createElement("li");
    const span = document.createElement("span");
    let text = comp_target.querySelector("span").innerText;
    const bak_btn = document.createElement("button");

    span.innerText = text;
    bak_btn.innerText = "戻す";
    li.classList.add("complete_item");
    bak_btn.classList.add("back_btn");

    bak_btn.addEventListener("click", function () {
      const bak_target = bak_btn.parentNode;
      deleteFromIncompleteList(bak_target, comp_list);
      let text = bak_target.querySelector("span").innerText;
      createIncompleteList(text);
    });

    li.appendChild(span);
    li.appendChild(bak_btn);
    comp_list.appendChild(li);
    deleteFromIncompleteList(comp_target, list);
  });
  del_btn.addEventListener("click", function () {
    deleteFromIncompleteList(del_btn.parentNode, list);
  });
};
