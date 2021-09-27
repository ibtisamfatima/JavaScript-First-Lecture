import Navttc from "./second.js";

//to create object we use = sign to assing properties and values
//we use : colon sign
const dwd = new Navttc(
  "TIME",
  "Dynamic Web development",
  "6 months",
  "JS object",
  "Sir Abrar"
);
const pmp = new Navttc(
  "TIME",
  "Project Management Program",
  "3 months",
  "Management",
  "Mam Haseena"
);
const dm = new Navttc(
  "TIME",
  "Digital Marketing",
  "6 months",
  "SEO",
  "Sir xyz"
);

const gd = new Navttc("TIME", 
"Graphic Designing", 
"6 months", 
"Designing",
"Sir xyz");

const cn = new Navttc("TIME", 
"Content Writing", 
"6 months", 
"Writing",
"Sir xyz");

const ir = new Navttc("TIME", 
"Internet Research", 
"6 months", 
"Research",
"Sir xyz");

const de = new Navttc("TIME", 
"Data Entry", 
"6 months", 
"Ms Excel",
"Sir xyz");

const cc = new Navttc("TIME", 
"Cloud computing", 
"6 months", 
"Computing",
"Sir xyz");

const ai = new Navttc("TIME", 
"Artificial Intelligence", 
"6 months", 
"FUndamentals of AI",
"Sir xyz");

var data = `
<h1 >The Institute of Technology and Management</h1>
<h1 >Coding Competition</h1>
<hr>
<table>
<tr>
  <th>Institue</th>
  <th>Course Name</th>
  <th>Duration</th>
  <th>Topic</th>
  <th>Instructor</th>
</tr>
<tr>
    <td>${dwd.institute}</td>
    <td>${dwd.course}</td>
    <td>${dwd.duration}</td>
    <td>${dwd.topic}</td>
    <td>${dwd.instructor}</td>
  </tr>
  <tr>
    <td>${pmp.institute}</td>
    <td>${pmp.course}</td>
    <td>${pmp.duration}</td>
    <td>${pmp.topic}</td>
    <td>${pmp.instructor}</td>
  </tr>
  <tr>
    <td>${dm.institute}</td>
    <td>${dm.course}</td>
    <td>${dm.duration}</td>
    <td>${dm.topic}</td>
    <td>${dm.instructor}</td>
  </tr>
  <tr>
  <td>${gd.institute}</td>
  <td>${gd.course}</td>
  <td>${gd.duration}</td>
  <td>${gd.topic}</td>
  <td>${gd.instructor}</td>
</tr>
<tr>
<td>${cn.institute}</td>
<td>${cn.course}</td>
<td>${cn.duration}</td>
<td>${cn.topic}</td>
<td>${cn.instructor}</td>
</tr>
<tr>
<td>${ir.institute}</td>
<td>${ir.course}</td>
<td>${ir.duration}</td>
<td>${ir.topic}</td>
<td>${ir.instructor}</td>
</tr>
<tr>
<td>${de.institute}</td>
<td>${de.course}</td>
<td>${de.duration}</td>
<td>${de.topic}</td>
<td>${de.instructor}</td>
</tr>
<tr>
<td>${cc.institute}</td>
<td>${cc.course}</td>
<td>${cc.duration}</td>
<td>${cc.topic}</td>
<td>${cc.instructor}</td>
</tr>
<tr>
<td>${ai.institute}</td>
<td>${ai.course}</td>
<td>${ai.duration}</td>
<td>${ai.topic}</td>
<td>${ai.instructor}</td>
</tr>
</table>

  <!-- {} brackets should be used rather than small brackets () below
  plus correct spelling mistake in institute -->

`;

// document.body.innerhtml = data
//above commadn is wrong . right commad is following
document.body.innerHTML = data;
