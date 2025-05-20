import logo from '../../assets/logo.jpg'
import logoo from '../../assets/logoo.png'


const Navbar = () => {
    return (
        <header className='flex px-3 py-1 gap-3 border-b-2 border-gray-200'>
            <div className="w-12 h-12">
                <img className='w-full h-full' src={logoo} alt="Logo" />
            </div>
                <h1 className='text-red-800 text-4xl font-bold'>NoteIt</h1>
        </header>
    )
}
export default Navbar