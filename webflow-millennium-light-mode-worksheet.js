document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".light-mode-toggle").forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        //
        // MAIN NAVIGATION ADD ------------------------------------------
        //
        document
          .querySelectorAll(".main-navigation")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".nav-link")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#dashboard-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#dashboard-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#quotes-list-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#quotes-list-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#sales-order-list-lottie")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#sales-order-list-lottie-light-mode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#settings-light-mode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#settings-dark-mode")
          .forEach((target) => target.classList.add("off"));
        //
        // GLOBAL ADD
        //
        document
          .querySelectorAll("#email-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#email-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".new-comment-indicator")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".logo_subsidiary-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".logo_subsidiary-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".filter_clear")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item_checkbox")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_checkbox-label")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_location-quantity")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_amt-other-quotes")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_checkbox-bg")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_input")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_text-area")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".body")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".side-peek_component")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".side-peek_header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_select-side-peek")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_checkbox-filter")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".filter_section")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_close-sidepeek")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".modal")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".modal_container")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_checkbox-icon")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".toggle")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".toggle_switch")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".page-header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".container")
          .forEach((target) => target.classList.add("off"));
        //
        // Top Search Component
        //
        document
          .querySelectorAll(".brand")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".search_button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".top-search_input")
          .forEach((target) => target.classList.add("off"));
        // Quotes Page: Search and Filter
        document
          .querySelectorAll(".search_input")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".filter_button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".search_component")
          .forEach((target) => target.classList.add("off"));

        //
        // Buttons
        //
        document
          .querySelectorAll(".button_icon-tooltip")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_table-dropdown")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_table-dropdown-toggle")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_table-dropdown-list")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_table-dropdown-link")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-fill_small")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".radio-button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-status-active")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-status_icon")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-status_text")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-status_dropdown")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-fill")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-bulk-select")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-trash")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_icon")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#trash-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#trash-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#bulk-select-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#bulk-select-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#create-quote-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#create-quote-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#new-sales-order-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#new-sales-order-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        //
        // TABLE ----------------------------------------
        //
        document
          .querySelectorAll(".table_item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_item-header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-header-first")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-header-responsive")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-header-last-responsive")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#owner-dropdown")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#order-number-dropdown")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-last-responsive")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-status-select")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-first")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-responsive")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_item-button-wrapper")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_table-open-quote")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".reorder")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_table")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_item-checkbox")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_dropdown-list")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#table-link-active")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#table-link-in-review")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#table-link-closed")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#table-link-lost")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".bulk-edit_container")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_item-button-wrapper")
          .forEach((target) => target.classList.add("off"));
        //
        // SWIPER ADD ----------------------------------------
        //
        document
          .querySelectorAll(".swiper-slide-thumb-active")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".swiper-slide.is-inactive")
          .forEach((target) => target.classList.add("off"));
        //
        // CREATE NEW QUOTE PAGE ADD ----------------------------------------
        //
        document
          .querySelectorAll(".button-inactive")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-cancel")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-inactive_add-items")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_item-peek-open")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".results_item-wrapper")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".add-line_results")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".create-quote_nav")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#project-details-nav")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#configure-i2p-nav")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#add-item-nav")
          .forEach((target) => target.classList.add("off"));
        //
        // INDIVIDUAL QUOTE PAGE --------------------------------------------------
        //
        document
          .querySelectorAll(".heading_order-number")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#status-text-active")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#status-text-in-review")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#status-text-closed")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#status-text-lost")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-check-i2p")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#i2p-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#i2p-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_icon")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#convert-sales-order-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#convert-sales-order-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#duplicate-quote-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#duplicate-quote-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#share-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#share-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#save-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#save-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#comments-lottie-darkmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#comments-lottie-lightmode")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-save")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_label")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_select")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_input")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_text-area")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".search_input-sidepeek")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".add-contact_item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_remove-contact")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_input-side-peek")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_text-area-side-peek")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item_label")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_input")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_text-area")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".comments_item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_more")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".comments_time")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_add-comment")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".add-comment_component")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#form-text-area")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-attachment")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll("#button-cancel-comment")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_input-subtotal")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".subtotal-table_item-header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".subtotal-table_item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".subtotal_results-item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".show-history_list")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".i2p-price-heading")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".i2p_history-pricing")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".show-history_button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".staggered-radio-button")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".staggered_checkbox")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".form_number-wrapper")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-header-checkbox")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-header-last")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_cell-last")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".table_line-item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".upsell_header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".upsell_item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-inactive_add-items")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".upsell_component")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button-inactive_add-to-order")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_add-to-order")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_close")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".part_item")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".client-chosen")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".quote-page-header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".spacer_table-header")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".hide-line-item_toggle-hidden")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".button_icon-text")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".subsidiary-rondelle")
          .forEach((target) => target.classList.add("off"));
        document
          .querySelectorAll(".item-peek_input-quantity")
          .forEach((target) => target.classList.add("off"));
      } else {
        //
        // MAIN NAVIGATION REMOVE ----------------------------------------
        //
        document
          .querySelectorAll(".main-navigation")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".nav-link")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#dashboard-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#dashboard-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#quotes-list-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#quotes-list-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#sales-order-list-lottie")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#sales-order-list-lottie-light-mode")
          .forEach((target) => target.classList.remove("off"));
        //
        // GLOBAL REMOVE -----------------------------------------------
        //
        document
          .querySelectorAll("#email-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#email-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".new-comment-indicator")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".logo_subsidiary-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".logo_subsidiary-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".filter_clear")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item_checkbox")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_checkbox-label")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_location-quantity")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_amt-other-quotes")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_checkbox-bg")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_input")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_text-area")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".body")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".side-peek_component")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".side-peek_header")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_select-side-peek")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_checkbox-filter")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".filter_section")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_close-sidepeek")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".modal")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".modal_container")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_checkbox-icon")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".toggle")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".toggle_switch")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".page-header")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".container")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#settings-light-mode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#settings-dark-mode")
          .forEach((target) => target.classList.remove("off"));

        //
        // TOP SEARCH COMPONENT REMOVE =========================================
        //
        document
          .querySelectorAll(".brand")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".search_button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".top-search_input")
          .forEach((target) => target.classList.remove("off"));
        // Quotes Page: Search and Filter
        document
          .querySelectorAll(".search_input")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".filter_button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".search_component")
          .forEach((target) => target.classList.remove("off"));
        //
        // Quotes Page: Buttons
        //
        document
          .querySelectorAll(".button_icon-tooltip")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_table-dropdown")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_table-dropdown-toggle")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_table-dropdown-list")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_table-dropdown-link")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-fill_small")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".radio-button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-status-active")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-status_icon")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-status_text")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-status_dropdown")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-fill")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-bulk-select")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-trash")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_icon")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#trash-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#trash-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#bulk-select-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#bulk-select-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#create-quote-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#create-quote-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#new-sales-order-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#new-sales-order-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        //
        // TABLE REMOVE ======================================================
        //
        document
          .querySelectorAll(".table_item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_item-header")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-header-first")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-header-responsive")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-header")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-header-last-responsive")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#owner-dropdown")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#order-number-dropdown")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-last-responsive")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-status-select")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-first")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-responsive")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_item-button-wrapper")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_table-open-quote")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".reorder")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_table")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_item-checkbox")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_dropdown-list")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#table-link-active")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#table-link-in-review")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#table-link-closed")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#table-link-lost")
          .forEach((target) => target.classList.remove("off"));
        // Quotes Page: Create New Quote Page
        document
          .querySelectorAll(".button-inactive")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-cancel")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-inactive_add-items")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_item-peek-open")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".results_item-wrapper")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".add-line_results")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".create-quote_nav")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#project-details-nav")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#configure-i2p-nav")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#add-item-nav")
          .forEach((target) => target.classList.remove("off"));
        // Individual Quote Page
        document
          .querySelectorAll(".heading_order-number")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#status-text-active")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#status-text-in-review")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#status-text-closed")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#status-text-lost")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-check-i2p")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#i2p-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#i2p-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_icon")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#convert-sales-order-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#convert-sales-order-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#duplicate-quote-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#duplicate-quote-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#share-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#share-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#save-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#save-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#comments-lottie-darkmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#comments-lottie-lightmode")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-save")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_label")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_select")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_input")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_text-area")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".search_input-sidepeek")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".add-contact_item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_remove-contact")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_input-side-peek")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_text-area-side-peek")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item_label")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_input")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".item-peek_text-area")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".comments_item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_more")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".comments_time")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_add-comment")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".add-comment_component")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#form-text-area")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-attachment")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll("#button-cancel-comment")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_input-subtotal")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".subtotal-table_item-header")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".subtotal-table_item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".show-history_list")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".i2p-price-heading")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".i2p_history-pricing")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".show-history_button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".staggered-radio-button")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".staggered_checkbox")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".form_number-wrapper")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-header-checkbox")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_cell-last")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".table_line-item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".upsell_header")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".upsell_item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-inactive_add-items")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".upsell_component")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button-inactive_add-to-order")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_add-to-order")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".button_close")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".part_item")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".client-chosen")
          .forEach((target) => target.classList.remove("off"));
        document
          .querySelectorAll(".quote-page-header")
          .forEach((target) => target.classList.remove("off"));
      }
    });
  });
});
