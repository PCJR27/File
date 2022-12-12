//rood node,node type = DOCUMENT_NODE(VALUE=9)
const rootNode=window.document
console.log(rootNode)

//root element ไปเรียก
const rootElement=document.documentElement
console.log(rootElement)

//อยากได้ลูกของhtml
//html's all node type of children nodes ทั้งหมด any type
const htmlChildNodes=rootElement.childNodes
console.log(htmlChildNodes)
console.log(htmlChildNodes.length)
console.log(htmlChildNodes[1])

//only element types of html's children nodes //element type

const htmlElementNodes=rootElement.children
console.log(htmlElementNodes)
console.log(htmlElementNodes.length)//array like
console.log(htmlElementNodes[1])//array-like

//1.create a new paragraph element
const newPElementNode=document.createElement("p")

//2. create a new attribute
// const newAttribute=document.createAttribute("class")
// newAttribute.value="courses"
newPElementNode.setAttribute('class','courses') //ทำขั้นตอน2+4ไว้ในนี้แล้ว กรณีที่ไม่ต้องการใช้งานค่านี้อีก ไม่ต้องการใช้หลายรอบ
//3.create a text node
// const newTextNode=document.createTextNode("INT201")
// newPElementNode.textContent="<span style='color:red'>INT201</span>" //ออกมาเป็นtextทำให้เป็นตัวสีแดงไม่ได้เพราะpropertyนี้อ่านไม่ออก
newPElementNode.innerHTML="<span style='color:red'>INT201</span>" //รวม3+5ไว่ในบรรทัดนี้แล้วกรณีสร้างtext

//4 เชื่อมความสัมพันธ์ add attribute node to its owner tag
// newPElementNode.setAttributeNode(newAttribute)

//5.add textnode to parent node
// newPElementNode.appendChild(newTextNode)

//6.add a new paragraph to a tree document
const targetDiv=document.getElementById("myApp")//find a <div id="myApp" node in the document
targetDiv.appendChild(newPElementNode)

//get node name,node value and node type

console.log(targetDiv.nodeType)
console.log(targetDiv.nodeName)
console.log(targetDiv.nodeValue)

console.log(rootNode.nodeType)
console.log(rootNode.nodeName)
console.log(rootNode.nodeValue)

console.log(document.head)
console.log(document.body)
console.log(document.title)
// console.log(newAttribute.ownerElement)

console.log(targetDiv.previousElementSibling) //ซ้าย
console.log(targetDiv.nextElementSibling)//ขวา
console.log(targetDiv.parentElement)//บน
console.log(targetDiv.children)//ล่าง
// console.log(targetDiv.previousElementSibling)



