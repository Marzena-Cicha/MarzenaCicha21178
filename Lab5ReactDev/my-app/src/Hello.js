//function Hello() {
// return <h1>Marzena Cicha 21178</h1>;
//}


function HelloWithProps(props) {
 return <h1>Witaj, {props.name}!</h1>;
}
function App() {
 return (

 <div>
 <HelloWithProps name="Anna" />
 <HelloWithProps name="Bartek" />
 <HelloWithProps name="Celina" />
 </div>
 );
}
export default App;