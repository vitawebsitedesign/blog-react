import React from 'react';
import PropTypes from 'prop-types';

const getAnchorListItems = urls => urls.map((u, idx) =>
    <a key={idx} href={u} target="_blank" rel="noopener noreferrer" title="click to open this external link in a new tab" className="d-block">
        {u}
    </a>
);

const getRows = urlsByType => Object.keys(urlsByType).map(title =>
    <tr key={title}>
        <td className="pr-2 text-capitalize">{title}</td>
        <td className="text-bold">
            {getAnchorListItems(urlsByType[title])}
        </td>
    </tr>
);

const ExhibitUrls = props => (
    <table className="w-100">
        <tbody>
            {getRows(props.urlsByType)}
        </tbody>
    </table>
);

ExhibitUrls.propTypes = {
    urlsByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
};

export default ExhibitUrls;
