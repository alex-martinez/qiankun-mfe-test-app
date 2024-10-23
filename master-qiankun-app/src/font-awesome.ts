import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faBlockQuestion,
  faGears,
} from '@fortawesome/pro-light-svg-icons';

// Add icons to the library
library.add(
  faHouse,
  faBlockQuestion,
  faGears,
);

// Allow DOM manipulation to replace <i> tags with <svg>
dom.watch();
