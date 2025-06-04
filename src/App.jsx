import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";
import Footer from "./components/Footer";

const entry = data.map(entry => {
    return(
        <Entry
            key={entry.id}
            {...entry}
            />
    )
})

export default function App(){
    return(
    <>
        <Header/>
        <main className="container">
            {entry}
        </main>
        <Footer/>
    </>
    )
}