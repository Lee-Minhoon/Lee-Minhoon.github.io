import { Component } from "react";
import { Route } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
import Resume from './pages/Resume';
import PDFViewer from './pages/PDFViewer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Resume} />
                <Route exact path="/pdfviewer/:folder/:pdf" component={PDFViewer} />
            </div>
        );
    }
}

export default App;
