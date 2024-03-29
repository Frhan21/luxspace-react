import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Breadcrumb({list}) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
            {
                list?.map?.((items,index) => {
                    const arias = index === list?.length ? {"aria-label":"current-page"} : {}
                    return (
                        <li key={items.url}>
                            <Link to={items.url} {...arias}>{items.name}</Link>
                        </li>
                )
                })
            };
        </ul>
      </div>
    </section>
  );
}

Breadcrumb.PropTypes = {
    list: propTypes.array.isRequired,
};
