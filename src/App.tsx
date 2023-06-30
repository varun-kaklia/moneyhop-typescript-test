
import './App.css';
import './styles/fonts.css';
import { HomePage } from './page';
import { Footer, Header } from './components';
import {FooterButton} from './lib/Constant'
import { Globe } from './elements/Logo';

function App() {
  return (
    <div className="font-gt-walsheim-pro p-1 max-w-7xl">
      <div className="py-1 px-4">
      <Header />
      </div>
      <div>
      <HomePage/>
      </div>
      <div className="py-2">
        <Footer/>
      </div>
      <div className="w-full lg:p-4 md:p-3 sm:p-2 p-1">
      <div className="border-t border-gray-200 flex flex-col sm:flex-row justify-center items-center">
        <div className="flex items-center justify-center w-full">
          <div className="lg:w-full sm:basis-1/4 sm:w-1/3 w-full text-left py-2">
            <span>&copy; 2022 Educrat. All Right Reserved.</span>
          </div>
          <div className="flex justify-end  basis-1/2 items-center w-full  px-1 pt-2">
            <div className='lg:flex lg:flex-row justify-start w-full items-center hidden'>
              {FooterButton?.map((x, index) => (
                <button className="px-0.5 hover:text-primary w-full text-base py-2" key={index}>
                  <span className='w-fit'>{x}</span>
                </button>
              ))}
            </div>
            <button className="flex items-center justify-center h-fit py-2 px-4 bg-gray-100 rounded-md">
              <Globe customClass={'mr-2'} />
              <span className="text-base">English</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
