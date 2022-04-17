export type ModalProps = {
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean;

  /** Function that will be run after the modal has opened. */
  onAfterOpen?: () => void;

  /** Function that will be run after the modal has closed. */
  onAfterClose?: () => void;

  /** Function that will be run when the modal is requested
     to be closed (either by clicking on overlay or pressing ESC).
     Note: It is not called if isOpen is changed by other means. */
  onRequestClose?: () => void;

  /** Number indicating the milliseconds to wait before closing
     the modal. */
  closeTimeoutMS?: number;

  /* Object indicating styles to be used for the modal.
     It has two keys, `overlay` and `content`.
     See the `Styles` section for more details. */
  style?: {
    overlay?: CSSProperties;
    content?: CSSProperties;
  };

  /* String indicating how the content container should be announced
     to screenreaders */
  contentLabel?: string;

  /* String className to be applied to the portal.
     See the `Styles` section for more details. */
  portalClassName?: string;

  /* String className to be applied to the overlay.
     See the `Styles` section for more details. */
  overlayClassName?: string;

  /* String id to be applied to the content div. */
  id?: string;

  /* String className to be applied to the modal content.
     See the `Styles` section for more details. */
  className?: string;

  /* String className to be applied to the document.body
     (must be a constant string).
     This attribute when set as `null` doesn't add any class
     to document.body.
     See the `Styles` section for more details. */
  bodyOpenClassName?: string;

  /* String className to be applied to the document.html
     (must be a constant string).
     This attribute is `null` by default.
     See the `Styles` section for more details. */
  htmlOpenClassName?: string;

  /* Boolean indicating if the appElement should be hidden */
  ariaHideApp?: boolean;

  /* Boolean indicating if the modal should be focused after render. */
  shouldFocusAfterRender?: boolean;

  /* Boolean indicating if the overlay should close the modal */
  shouldCloseOnOverlayClick?: boolean;

  /* Boolean indicating if pressing the esc key should close the modal
     Note: By disabling the esc key from closing the modal
     you may introduce an accessibility issue. */
  shouldCloseOnEsc?: boolean;

  /* Boolean indicating if the modal should restore focus to the element
     that had focus prior to its display. */
  shouldReturnFocusAfterClose?: boolean;

  /* String indicating the role of the modal, allowing the 'dialog' role
     to be applied if desired.
     This attribute is `dialog` by default. */
  role?: string;

  /* Boolean indicating if the modal should use the preventScroll flag when
     restoring focus to the element that had focus prior to its display. */
  preventScroll?: boolean;

  /* Function that will be called to get the parent element
     that the modal will be attached to. */
  parentSelector?: () => HTMLElement;

  /* Additional aria attributes (optional). */
  aria?: {
    labelledby?: string;
    describedby?: string;
  };

  /* Additional data attributes (optional). */
  data?: { background: string };

  /* String testId that renders a data-testid attribute in the DOM,
      useful for testing. */
  testId?: string;

  /* Overlay ref callback. */
  overlayRef?: () => void;

  /* Content ref callback. */
  contentRef?: () => void;
};
