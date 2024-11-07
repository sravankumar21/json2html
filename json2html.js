// json2html.js
export default function json2html(data) {
  const table = document.createElement("table");
  table.setAttribute("data-user", "battu4262@gmail.com");

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Age", "Gender"];
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  data.forEach(person => {
    const row = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = person.Name;
    const tdAge = document.createElement("td");
    tdAge.textContent = person.Age;
    const tdGender = document.createElement("td");
    tdGender.textContent = person.Gender || ""; // For those without gender
    row.appendChild(tdName);
    row.appendChild(tdAge);
    row.appendChild(tdGender);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table.outerHTML; // Return the table as a string
}
