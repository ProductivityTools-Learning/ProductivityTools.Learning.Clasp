function myFunction() {
  Logger.log("pa34wel")
  
}

function addToSideBar(){
  const htmlServ=HtmlService.createTemplateFromFile("my");
  const html=htmlServ.evaluate();

  const ui=SpreadsheetApp.getUi();
  ui.showSidebar(html);
}