Bikin cara bikin npx create react app sama tailwind react  

React itu javascript library, dibuild oleh face book, trs skrng ini library paling populer buat bikin UI

Jelasin struktur

package.json = informasi dari website kita
node modules = isinya banyak library, ini cmn digunakan dalam tahap development, kalo udh masuk tahap production udh gak dipake lagi

Public 
	isinya index html ini yang paling utama semua lalu div id root ini dimana nnanti semua element dari react bakal dimunculin melalui code index.js

app.js
	ini file yang akan kita gunakan untuk menulis semua code react
	
index.js 
	code disini yang memasukan code yang ada di app.js ke dalam index html tadi

lalu kalian bingung kan kenapa bisa kita tulis code kayak html di library java script ini karena javascript itu ditulis dalam format jsx 

jsx dapat  mengubah tag html menjadi code yang nnt bisa dibaca oleh react itu sendiri 


Jelasin component react

Semua di react adalah component, component dapat dikatakan section dari frontend, contohnya smakone.org aja

Cara menulis hello world 
		Kasih tahu kalo harus selalu diwrap oleh div

Jelasin expression di react
	const name = "Codeone"
	const x = true
	const age = 20
	const link  = "google.com"

jelasin ternary operators

Hello {name}
Age : {age * 2}
Hello {x : "yes" : "no"}
<A href={link}> Go to google <//a>

Membuat component 
		di src bikin folder baru kasih nama component(file component bakal disimpen disini)
		Lalu dikasih file Header.js dan tulis isinya
	
	Cara pake nya di app.js lalu add import header from 
   "./components/header"
	lalu dipanggil

Jelasin ES6 arrow function dulu

Click event 

const clickme = () =>{
console.log("Test click")
}

< button onclick={ clickme}>Click Me</button>

nah tapi kalo function itu kalian mau kasih parameter kan harusnya clickme(value) gitu kan , tapi di react gak bs gitu kenapa ? saya kasih contoh ya 

< button onclick={ clickme("CodeOne")}>Click Me</button>

lalu kita ganti dulu functionnya jadi
const clickme = (name) =>{
console.log("hi" + name)
}

nah pas kita buka console.lognya kita belum click dia dah muncul kan , nah cara buat solvenya itu kalian harus wrap onclicknya di anonymous function

< button onclick={ () => clickme("CodeOne")}>Click Me</button>

UseState Hook

Nah kalo contoh kita mau ubahin data sebuah variable kita menggunakan usestate ya , tapi sebelum itu kalian harus tahu dulu kenapa kita harus menggunakan usestate

kita pake code yang sama tadi, contoh kita mau ubah titlenya ya, artinya 

let title = "CodeOne"

lalu aku mau gantiinya pas user click button itu artinya codenya bakal aku ganti ke

< button onclick ={ ChangeTitle} > Change Title </button>

lalu function clickmenya aku ganti ya ke
const changeTitle = () =>{
title = "Title has changed"
}

pas kita click gak bakal berubah kan , tapi kalo kita console.log dia ada . Nah untuk mengatasi problem itu kita menggunakan usestate ya 

Pertama tama kita import dulu usestatenya, jadi 
import {useState} from "react"

lalu title ini bakal aku ganti ke dalam bentuk usestate 

const [Title, setTitle] = useState("CodeOne")
% Title = getter
% setTitle = setter
Penjelsan code di atas tuh yang pertama itu getter trs kedua itu setter biar yang artinya yang pertama itu buat nampilin datanya , yang kedua itu buat ngubah datanya(biasanya sih dalam function yang setter ini)

lalu useState ("codeone ")
ini tuh initial data sih title itu 

nah biar lebih ngerti aku ganti ya code yang tadi gak jalan itu pake usestate

const changeTitle = () =>{
 setTitle("Titlle has changed")
}
bikin juga ke age tapi gak ush dikali 2 

Loop list 

const [Products, setProducts] = useState([
	{id:1, title : 'Product 1', price : 899},
	{id:2, title : 'Product 2', price : 769},
	{id:3, title : 'Product 3, price : 989},
	{id:4, title : 'Product 4', price : 871},
	{id:5, title : 'Product 5', price : 459}			
])

< div>
	Product list
	< ul>
		{Products.map( (product) => {
		return(
			< li key={product.id}>
				{product.title} - {product.price}
			</li>
		)})}
	</ul>
</div>

Jelasin ^

Props 
Bikin file baru di component itu adalah ProductList.js

lalu pindahin 	Product list
	< ul>
		{Products.map( (product) => {
		return(
			< li key={product.id}>
				{product.title} - {product.price}
			</li>
		)})}
	</ul>

code ini ke dalam props.js

lalu di bawah app.js

<ProductList Products={Products} / >


di productlist nanti  bisa bikin dua cara bisa  
const ProductList = (props)
, trs bawanya pake props

atau langsung pake nama props yang kita turunin dari parent component 
const ProductList = ({Products}), trs bawanya pake products

Nah itu kan cara mindahin data dari parent ke child, kalo pindahin function gimana ? caranya mirip mirip 

contoh kita mau kasih function delete dalam tiap product

<ProductList Products={Products}  deleteFunction={deleteProduct}/ >

lalu bikin function delteProduct

const deleteProduct = (SelectedProductID) =>{
	const newProducts = Products.filter(product => product.id !== SelectedProductID )
	setProducts(newProducts)
}

ini artinya pas kita pencet function ini dia akan filter usestate tadi menjadi list product dimana list tersebut gak ada selectedProductID kita

ProductList.js
masukin dibawah li key < button onclick = { () => deleteProduct(product.id)}> Delete </button> 

Sekarang saya akan menjelaskan UseEffect

	UseEffect akan berguna kalo kalian mau menjalankan sebuah function setiap kali page kalian rerender 

Saya akan berikan contoh gmn carana useeffect ini  bekerja 
Pertama kita import dulu useeffectnya 
import {useState, useEffect} from "react"


useEffect(()=>{
console.log("UseEffect is running  ")
})

maka ini akan jalan setiap kali page kalian render 

kita juga bisa bikin berjalan pas dia pertama kali render

useEffect(()=>{
console.log("UseEffect is running  ")
}, [])

Trs masih ada satu lagi cara useEffect ini bekerja , dia bisa jalan ketika sebuah data berubah , maksudnya gmn ?

contohnya gini

kita kasih 

const[Data, setData] = useState("Jason")

lalu kasih useeffect

useEffect(()=>{
	console.log("UseEffect is running")
}, [Data])

kita kaisih data biar kasih tahu kalo useeffect ini akan berjalan kalo value Data berubah 

kita kasih button

< button onclick = {() => setData("Klein")}> Change Name </button>

nah kalian lihat kan dia cmn jalan pas data itu berubah




https://www.youtube.com/watch?v=w7ejDZ8SWv8 cuman 42.57 aja

https://www.youtube.com/watch?v=2epglWOVJrI&t=1582s ini basically counter aja

https://www.youtube.com/watch?v=Lya-qYiDqIA jelasin ini juga 


Ngajarnya dengan cara bikin counter



