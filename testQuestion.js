// 第一題
// (A) 請寫一個程式把裡面的字串反過來
function backwind(string) {
  let stack = [];
  let stringArray = string.split("");
  const times = stringArray.length;
  for (i = 0; i < times; i++) {
    stack.push(stringArray.pop());
  }
  const result = stack.join("");
  return console.log(result);
}

backwind("junyiacademy");

// ​(B) 請寫一個程式把裡面的字串，每個單字本身做反轉，但是單字的順序不變
function backwindSentence(string) {
  let stack1 = [];
  let stack2 = [];
  let backwindWord = [];
  let stringArray = string.split(" ");
  const mapOutput = stringArray.map((item) => {
    stack1 = [];
    stack2 = [];
    backwindWord = [];
    stack1.push(item);
    backwindWord = stack1[0].split("");
    const times = backwindWord.length;
    for (i = 0; i < times; i++) {
      stack2.push(backwindWord.pop());
    }
    return stack2;
  });
  stack1 = [];
  for (i = 0; i < mapOutput.length; i++) {
    stack1.push(mapOutput[i].join(""));
  }
  let result = stack1.join(" ");
  return console.log(result);
}

backwindSentence("flipped class room is important");
// 第二題
//請寫一個程式，Input 是一個數字，Output 是從 1 到這個數字，扣除掉所有 3 的倍 　　   數以及 5 的倍數，但是需要保留同時是 3 和 5 的倍數的總數字數
function factor(number) {
  let result = [];
  for (i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      continue;
    } else if (i % 3 != 0 && i % 5 == 0) {
      continue;
    } else {
      result.push(i);
    }
  }
  return console.log(`Output: ${result.length}`);
}
factor(15);
// 第三題
//首先選擇混和的袋子，抽出一枝筆，因袋上貼的標誌是錯的，所以此時不論抽到鉛筆或是原子筆都必定只有一支
//不會是混和，再來我們就能輕易判斷其他兩袋的內容
//具體步驟:
//1.從混和的袋子中抽到一支鉛筆，此時我們能確定混和袋中必定只有鉛筆(因袋上貼的標誌是錯的，所以不可能是混和)
//2.下一步我們判斷原子筆袋和鉛筆袋的可能，原子筆袋內部可能有: 混和、原子筆，但因標示是錯的，所以必定為混和
//3.因此我們能確定 混和袋、原子筆袋、鉛筆袋三袋的內容為: 鉛筆、混和、原子筆
// 以上為判斷的方法，若是在第一步驟抽到原子筆，只要依據「袋上貼的標誌是錯的」此線索就能依循找出答案

// 第四題
//我們首先將題目的數字整理出來
//原價900，應折價150，私吞60，實際折價90，共有3人
//因此我們能列出正確的算式 每人要付的價錢是: [900 - (150 - 60)] / 3 = 270，小括號為實際折價數，中括號為商品總價
//從此算式倒推回去能知道 270 * 3 = 810 是三位客人實際出的價格，此時我們要再加上: 150 - 60 = 90 此一實際的折價數目，得出原價為 810 + 90 = 900
//若只是加上私吞的60元，等同於總折價為 60 ，總價為 840，每人付280，與原狀況不符
