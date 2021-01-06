import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getExhibit} from '../redux/selectors/exhibits';
import ExhibitUrls from './ExhibitUrls';

const getOverviewParagraphs = overview => overview.trim().split('\n').map((o, idx) => 
    <p key={idx}>
        {o}
    </p>
);

const getLearntListItems = lessons => lessons.map((l, idx) => 
    <li key={idx}>
        {l}
    </li>
);

class Exhibit extends React.Component {
    render() {
        const tagsProduct = this.props.item.tagsByType.product;
        const tagsProgramming = this.props.item.tagsByType.programming;
        let tags = [];

        if (tagsProduct)
            tags = [...tags, ...tagsProduct];
        if (tagsProgramming)
            tags = [...tags, ...tagsProgramming];

        const tagEles = tags.map(tag =>
            <span key={tag} className="px-3 py-1 mr-2 border-left text-small text-secondary">
                {tag}
            </span>
        );

        return (
            <div className="App container-fluid">
                <div className="row">
                    <div className="col-12 page-edge-shadow"></div>
                </div>
                <div className="row App--row">
                    <aside className="col-12 col-xxl-4 d-flex">
                    <aside className="d-none d-xl-flex bookmark flex-column mr-5">
                        <div>
                            <div className="d-inline-block bookmark--pagenum">
                                <i className="material-icons md-16">blur_on</i>
                            </div>
                        </div>
                        <div className="bookmark--name d-flex align-items-center justify-content-center pt-5 text-nowrap text-uppercase">
                            software engineer portfolio
                        </div>
                    </aside>
                    <aside className="d-flex flex-column flex-grow-1 ml-4 text-left wrapper-textual">
                        <div className="d-flex flex-column text-uppercase text-lighter wrapper-textual--title">
                            <div className="text-small text-uppercase">
                                <Link to="/" className="text-bold">home</Link> &gt; exhibit
                            </div>
                            <div className="mt-1 mb-3">
                                <div className="text-powder-blue">{this.props.item.title}</div>
                            </div>
                        </div>
                        <div className="mt-5 mb-3 divider"></div>
                        <div className="d-flex mb-3">
                            <div className="text-bold wrapper-textual--headline">
                                {this.props.item.preview.about}
                            </div>
                        </div>
                        <div className="d-flex mb-5">
                        {tagEles}
                        </div>
                        <section className="mt-4 row wrapper-textual--article">
                        <div className="col-12 col-md-6">
                            <p className="text-bold">
                                Abstract
                            </p>
                            {getOverviewParagraphs(this.props.item.overview)}
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="text-bold">
                            Applied techniques
                            </p>
                            <div>
                                <ul>
                                    {getLearntListItems(this.props.item.learnt)}
                                </ul>
                            </div>
                        </div>
                        </section>
    
                        <section className="mt-5 mb-5 wrapper-textual--table-of-contents">
                        <ExhibitUrls urlsByType={this.props.item.urlsByType} />
                        </section>
                    </aside>
                    </aside>
                    <main className="col-12 col-xxl-8 wrapper-gallery">
    
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    item: getExhibit(state, props.match.params.id)
});

export default connect(mapStateToProps)(Exhibit);
