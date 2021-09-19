import { Component } from "react";
import { Document, Page } from 'react-pdf';
import pdfviewer from './pdfviewer.module.scss';

class PDFViewer extends Component {
    constructor() {
        super();
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({
            numPages: numPages
        })
    }

    render() {
        const pdf = `/projects/${this.props.match.params.folder}/${this.props.match.params.pdf}.pdf`
        return (
            <div className={pdfviewer.PDFViewer}>
                <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
                    {Array.from(new Array(this.state.numPages), (e, index) => (
                        <Page pageNumber={index + 1} />
                    ))}
                </Document>
            </div >
        );
    }
}

export default PDFViewer;
