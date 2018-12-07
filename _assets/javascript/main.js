//= require ./vendor/gb-validations
//= require ./dropmenu
//= require ./contact

// ---------------------------------------------- first-load boilerplate stuff below

// fire once DOM is loaded
function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}
