/** Wrapper for the Toast component. */
export default class ToastWrapper {
  /**
   * All these parameters are omittable and the toast will work as expected.
   *
   * @param {string} state The state of the toast, defines the look and feel of it. Can be one of [`default`, 'valid', 'invalid', 'loading']
   * @param {string} title The title of the toast, appears at the very top.
   * @param {string} subtitle The tagline of the toast, appears as a description beneath the title.
   * @param {string | JSX.Element} icon The icon of the toast, appears before the title.
   * @param {Function} onRemove The function that's called when the toast is removed by the system or the user.
   */
  constructor({ state, title, subtitle, icon, onRemove }) {
    this.state = state;
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.onRemove = onRemove;
  }
}

/** Add a toast to the toasts list. */
function makeToast(
  toasts,
  setToasts,
  { state, title, subtitle, icon, onRemove }
) {
  const forkedToasts = toasts.slice();
  forkedToasts.push(
    new ToastWrapper({
      state: state,
      title: title,
      subtitle: subtitle,
      icon: icon,
      onRemove: onRemove,
    })
  );
  setToasts(forkedToasts);
}

export { makeToast };
