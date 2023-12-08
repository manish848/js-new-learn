const insert = document.getElementById("insert")
// now on the whole window where ever we press the key that must be applied , for that we have to apply an eventlistener on the whole window that is reallly necessary so we need to take care of this thing really importantly

window.addEventListener('keydown', (e)=>{
    if(e.code == "Space")
    e.key = "Space"
    insert.innerHTML = 
    `<div class = "color">
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? 'Space': e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  <\div>`
})