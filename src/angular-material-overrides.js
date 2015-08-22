function(){
"use strict";

/**
 * @ngdoc module
 * @name material.components.toolbar
 */
angular.module('material.components.toolbar', [
  'material.core',
  'material.components.content'
])
  .directive('mdToolbar', mdToolbarDirective);

/**
 * @ngdoc directive
 * @name mdToolbar
 * @module material.components.toolbar
 * @restrict E
 * @description
 * `md-toolbar` is used to place a toolbar in your app.
 *
 * Toolbars are usually used above a content area to display the title of the
 * current page, and show relevant action buttons for that page.
 *
 * You can change the height of the toolbar by adding either the
 * `md-medium-tall` or `md-tall` class to the toolbar.
 *
 * ### Scroll-Fade Toolbar
 *
 * The `md-scroll-fade` attribute can be included on the `md-toolbar` to create a smooth fade effect.
 * This is most often used with a picture that fades to a solid color while the user scrolls
 * down the page. When using the `md-scroll-fade` attribute the toolbar can contain an element with
 * the `md-expanded` attribute. This element will fill the height of the toolbar and have the attribute
 * `md-fade-out` added to it (see below). By default the overflow content of the `md-expanded` element
 * will be visible outside of the toolbar. This can be avoided by wrapping the `md-expanded` element
 * in an element with the attribute `md-expanded-container`. An element with the class `.image` can
 * be included inside of the `md-expanded` element with a background image that will fill the toolbar
 * when it is expanded.
 *
 * An element with the class `md-toolbar-tools` can be used to show action buttons on the toolbar.
 * The `md-toolbar-tools` will be fixed at the top of the toolbar unless the toolbar scrolls more then
 * the height of the tools, then the tools will scroll with the toolbar.
 *
 * The toolbar can also contain an element with the attribute `md-toolbar-title`. This element will be
 * placed at the bottom of the toolbar and scroll up with the toolbar, resting in the default location.
 * The `md-toolbar-title` will also be scaled while the user scrolls. The default scale is 1.5, but can
 * be modified with the `md-title-scale` attribute.
 *
 * The scroll-fade toolbar will scroll up until the toolbar is 64px high, then it will be fixed at the
 * top of the parent container. This can be modified via the `md-keep-condensed` attribute, where the
 * value of the attribute is the amount of pixels to keep of the toolbar.
 *
 * Much like the `md-keep-condensed` the `md-expanded-keep` attribute on the element with the attribute
 * `md-expanded` will keep the expanded background at the specified pixels.
 *
 * When using the `md-scroll-fade` attribute any element in the toolbar can be faded in or out
 * by adding the `md-fade-in` or `md-fade-out` directives. The `md-no-fade` attribute can be used
 * to counteract the `md-fade-in` or `md-fade-out` actions. The `md-fade-out` attribute is added to the
 * `md-expanded` element by default. In order to counteract this add the `md-no-fade` attribute to the
 * element.
 *
 * To achieve an overlapping of the content and the toolbar add the `md-content-offset` to the toolbar,
 * where the value is the amount, in pixels, to overlap the content onto the toolbar.
 *
 *
 * A toolbar with the `md-shrink` or `md-scroll-fade` attributes will emit the event `$mdToolbarCondensed`
 * when it reaches the minimum height and `$mdToolbarExpanded` when it grows bigger than the Minimum height.
 * This can be used, for example, to show a button only when the toolbar is condensed by listening to the
 * event and setting a scope variable.
 * @usage
 * <hljs lang="html">
 * <div layout="column" layout-fill>
 *   <md-toolbar>
 *
 *     <div class="md-toolbar-tools">
 *       <span>My App's Title</span>
 *
 *       <!-- fill up the space between left and right area -->
 *       <span flex></span>
 *
 *       <md-button>
 *         Right Bar Button
 *       </md-button>
 *     </div>
 *
 *   </md-toolbar>
 *   <md-content>
 *     Hello!
 *   </md-content>
 * </div>
 * </hljs>
 *
 * @param {boolean=} md-scroll-shrink Whether the header should shrink away as
 * the user scrolls down, and reveal itself as the user scrolls up.
 * Note: for scrollShrink to work, the toolbar must be a sibling of a
 * `md-content` element, placed before it. See the scroll shrink demo.
 *
 *
 * @param {number=} md-shrink-speed-factor How much to change the speed of the toolbar's
 * shrinking by. For example, if 0.25 is given then the toolbar will shrink
 * at one fourth the rate at which the user scrolls down. Default 0.5.
 *
 * @param {boolean=} md-scroll-fade Whether the header should fade from a picture/backdrop
 * to the toolbar as the user scrolls down. The toolbar must be a sibling of `md-content` and
 * contain an element with the attribute `md-expanded`, which will be the backdrop
 * when scrolled all the way to the top. To restrict the content of the expanded element to the
 * toolbar wrap the `md-expanded` in an element with the attribute `md-expanded-container`.
 * Optionally the toolbar can contain a `md-fab` with the attribute `md-toolbar-fab` and a
 * title with the attribute `md-toolbar-title` to animate from the bottom of the toolbar to
 * the normal toolbar position.
 * Note: Use this in conjunction with md-keep-condensed to keep the header at a certain height
 * when scrolling down.
 * Note: Use a container with the class `.md-toolbar-tools` to keep toolbar buttons at the top
 * of the toolbar.
 *
 * @param {number=} md-keep-condensed Whether the header should stay at the specified amount,
 * or scroll of the screen. This is only applicable to toolbars with the `md-scroll-fade` or
 * `md-scroll-shrink` attributes. Default 64px.
 *
 * @param {number=} md-fade-stop Whether the header should stay at the specified amount,
 * or scroll of the screen. This is only applicable to toolbars with the `md-scroll-fade` or
 * `md-scroll-shrink` attributes. Default 64px.
 *
 * @param {number=} md-title-scale-factor How much to increase the scale of the toolbar's
 * title by. For example, if 2 is given then the toolbar's title will grow to twice its
 * normal size when the content is scrolled all the way up and transition back its normal
 * location and normal size as the content is scrolled down. Only applicable to a toolbar with
 * `md-scroll-fade` and an element within the toolbar with the attribute `md-toolbar-title`
 * Default 1.5.
 *
 * @param {number=} md-expanded-speed-factor Much like `md-shrink-speed-factor`,
 * `md-expanded-speed-factor` specifies how much to change the speed of the toolbar's
 * `md-scroll-fade` background by. For example, if 0.25 is given then the background will scroll up
 * at one fourth the rate at which the user scrolls down. Set this lower than the
 * `md-scroll-speed-factor` to create a parallax effect. Default 0.5.
 *
 * @param {number=} md-content-offset How many pixels to offset the content element.
 * For example if you want the content to overlap the toolbar when expanded by 20px
 * set `md-content-offset` to 20. Default 0
 *
 * @param {number=} md-content-speed-factor Much like `md-shrink-speed-factor`,
 * `md-content-speed-factor` specifies how much to change the speed of the content
 *  element by. For example, if
 * `md-scroll-fade` background by. For example, if 0.25 is given then the background will scroll up
 * at one fourth the rate at which the user scrolls down. Set this lower than the
 * `md-scroll-speed-factor` to create a parallax effect. Default `=md-shrink-speed-factor`.
*/
function mdToolbarDirective($$rAF, $mdConstant, $mdUtil, $mdTheming, $animate ) {
  var translateY = angular.bind(null, $mdUtil.supplant, 'translate3d(0,{0}px,0)' );

  return {
    restrict: 'E',
    controller: angular.noop,
    link: function(scope, element, attr) {

      $mdTheming(element);

      if (angular.isDefined(attr.mdScrollShrink) || angular.isDefined(attr.mdScrollFade)) {
        setupScrollShrink();
      }

      function setupScrollShrink() {
        // Current "y" position of scroll
        var y = 0;
        // Store the last scroll top position
        var prevScrollTop = 0;

        var shrinkSpeedFactor = attr.mdShrinkSpeedFactor || 0.5;

        var toolbarHeight;
        var toolbarMinHeight = 0;
        var MIN_ANIMATE_HEIGHT = 64;
        var ANIMATE_AMOUNT = 0;
        var SCROLL_AMOUNT = 0;
        var fadeStop = parseInt(attr.mdFadeStop) || 0;

        var contentElement;
        var contentOffset = parseInt(attr.mdContentOffset || 0);
        var contentSpeedFactor = parseFloat(attr.mdContentSpeedFactor || shrinkSpeedFactor);

        var expandedElement;
        var expandedSpeedFactor = parseFloat(attr.mdExpandedSpeedFactor || shrinkSpeedFactor);
        var expandedElementKeep;

        var sideWrapper;

        var toolbarTools;
        var toolbarTitle;
        var titleScaleFactor = parseFloat(attr.mdTitleScaleFactor || 1.5);
        var toolbarFab;

        if (angular.isDefined(attr.mdScrollFade)) {
          expandedElement = angular.element(element[0].querySelector('[md-expanded]'));
          if (expandedElement[0]) {
            expandedElement.css('opacity', 1);
            expandedElement.addClass('fill-height');
            //if the expanded element isn't set to no fade, add the fade attribute to it
            if (expandedElement.attr('md-no-fade') === undefined){
              expandedElement.attr('md-fade-out', true);
            }
            var keep = expandedElement.attr('md-expanded-keep');
            if (keep){
              expandedElementKeep = parseInt(keep || MIN_ANIMATE_HEIGHT);
            }else{
              expandedElementKeep = 0;
            }
          }
          toolbarTitle = angular.element(element[0].querySelector('[md-toolbar-title]'));
          if(toolbarTitle){
            toolbarTitle.css('transform-origin', '24px');
          }
          toolbarTools = angular.element(element[0].querySelector('.md-toolbar-tools'));
          toolbarFab = angular.element(element[0].querySelector('[md-toolbar-fab]'));
        }
        if (angular.isDefined(attr.mdKeepCondensed)) {
          toolbarMinHeight = parseInt(attr.mdKeepCondensed) || MIN_ANIMATE_HEIGHT;
        }

        var condensedEventEmitted = false;
        var expandedEventEmitted = false;

        var debouncedContentScroll = $$rAF.throttle(onContentScroll);
        var debouncedUpdateHeight = $mdUtil.debounce(updateToolbarHeight, 5 * 1000);

        // Wait for $mdContentLoaded event from mdContent directive.
        // If the mdContent element is a sibling of our toolbar, hook it up
        // to scroll events.
        scope.$on('$mdContentLoaded', onMdContentLoad);

        function onMdContentLoad($event, newContentEl) {
          // Toolbar and content must be siblings
          if (element.parent()[0] === newContentEl.parent()[0]) {
            // unhook old content event listener if exists
            if (contentElement) {
              contentElement.off('scroll', debouncedContentScroll);
            }

            newContentEl.on('scroll', debouncedContentScroll);
            if (angular.isDefined(attr.mdScrollFade)) {
              newContentEl.attr('scroll-fade-content', 'true');
            } else {
              newContentEl.attr('scroll-shrink', 'true');
            }

            contentElement = newContentEl;
            $$rAF(updateToolbarHeight);
          }
        }

        function updateToolbarHeight() {
          toolbarHeight = element.prop('offsetHeight');
          ANIMATE_AMOUNT = toolbarHeight - MIN_ANIMATE_HEIGHT;
          SCROLL_AMOUNT = ((toolbarHeight - toolbarMinHeight) / shrinkSpeedFactor);
          // Add a negative margin-top the size of the toolbar to the content el.
          // The content will start transformed down the toolbarHeight amount,
          // so everything looks normal.
          //
          // As the user scrolls down, the content will be transformed up slowly
          // to put the content underneath where the toolbar was.
          var margin =  -toolbarHeight + 'px';
          contentElement.css('margin-top', margin);
          contentElement.css('margin-bottom', margin);

          onContentScroll();
        }

        function onContentScroll(e) {
          var scrollTop = e ? e.target.scrollTop : prevScrollTop;

          debouncedUpdateHeight();

          y = Math.min(
            toolbarHeight / shrinkSpeedFactor,
            Math.max(0, y + scrollTop - prevScrollTop)
          );


          if (y > SCROLL_AMOUNT) {
            //Y is more then the max, set y to the max and broadcast that the toolbar is
            // condensed if it has not been previously broadcasted
            y = SCROLL_AMOUNT;
            if (!condensedEventEmitted) {
              scope.$broadcast('$mdToolbarCondensed', element);
              condensedEventEmitted = true;
              expandedEventEmitted  = false;
            }
          } else if (y !== SCROLL_AMOUNT){
            //contentElement.css('padding-top', (y*(shrinkSpeedFactor-contentSpeedFactor+1)) + 'px');
            if(!expandedEventEmitted){
              scope.$broadcast('$mdToolbarExpanded', element);
              expandedEventEmitted  = true;
              condensedEventEmitted = false;
            }
          }
          var scaledY = y * shrinkSpeedFactor;

          element.css( $mdConstant.CSS.TRANSFORM,  'translate3d(0,' + (-scaledY)+ 'px,0) ' );
          if (scaledY <= (SCROLL_AMOUNT*shrinkSpeedFactor-contentOffset)){
            contentElement.css( $mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (toolbarHeight-contentOffset - scaledY )+ 'px,0) ' );
          }else{
            contentElement.css( $mdConstant.CSS.TRANSFORM, 'translate3d(0,' + (toolbarHeight - (SCROLL_AMOUNT * shrinkSpeedFactor))+ 'px,0) ' );
          }
          //If this is a scroll fade toolbar set the opacity on the expanded Element
          // and do the transitions on the title, fab and tools
          if (angular.isDefined(attr.mdScrollFade) || angular.isDefined(attr.mdScrollShrink)) {
            var fadeOutElements = angular.element(element[0].querySelectorAll('[md-fade-in]:not([md-no-fade])'));
            fadeOutElements.css('opacity', Math.max(Math.min((scaledY / (ANIMATE_AMOUNT-fadeStop)), 1), 0));
            var fadeInElements = angular.element(element[0].querySelectorAll('[md-fade-out]:not([md-no-fade])'));
            fadeInElements.css('opacity', Math.max(Math.min((1 - scaledY / (ANIMATE_AMOUNT-fadeStop)), 1), 0));

            if (expandedElement) {
              var expandedTransform = y * (shrinkSpeedFactor - expandedSpeedFactor);
              expandedElement.css( $mdConstant.CSS.TRANSFORM, 'translate3d(0,' +expandedTransform+ 'px,0) ' );
            }
            //nivendha fix for side-wrapper :)
            sideWrapper=angular.element(element.parent()[0].querySelectorAll('#sidebar-wrapper'));
            if(sideWrapper){
              //console.log("FOUND");
              sideWrapper.css( $mdConstant.CSS.TRANSFORM,  'translate3d(0,' + (-scaledY)+ 'px,0) ' );
            }
            //If are scrolled less then the ANIMATE_AMOUNT then:
            // adjust the tools,
            // scale and adjust the position of the title,
            var toolsTransform = toolbarHeight-MIN_ANIMATE_HEIGHT;
            var titleTransform = 0;
            var titleScale = 1;
            if (scaledY <=ANIMATE_AMOUNT && toolbarTools){
              toolsTransform = scaledY;
              titleTransform = ANIMATE_AMOUNT * (1-scaledY/ANIMATE_AMOUNT);
              titleScale = Math.max((titleScaleFactor - 1) * (1 - scaledY / ANIMATE_AMOUNT) + 1, 1);
            }
            if (toolbarTools){
              toolbarTools.css( $mdConstant.CSS.TRANSFORM, 'translate3d(0,' +toolsTransform+ 'px,0) ' );
            }
            if(toolbarTitle){
              toolbarTitle.css(
                $mdConstant.CSS.TRANSFORM,
                'translate3d(0,' + titleTransform + 'px,0) ' +
                'scale(' + titleScale + ',' + titleScale + ')'
              );
            }

            //if the scroll is more then 95% of the ANIMATE_AMOUNT then hide the FAB
            if (toolbarFab){
              if (scaledY <= (ANIMATE_AMOUNT * .95)) {
                toolbarFab.removeClass('hide');
                toolbarFab.addClass('show');
              } else {
                toolbarFab.addClass('hide');
                toolbarFab.removeClass('show');
              }
            }
          }

          prevScrollTop = scrollTop;

          
            var hasWhiteFrame = element.hasClass('md-whiteframe-z1');

            if ( hasWhiteFrame && !y) {
              $animate.removeClass(element, 'md-whiteframe-z1');
            } else if ( !hasWhiteFrame && y ) {
              $animate.addClass(element, 'md-whiteframe-z1');
            }
         
        }

      }

    }
  };

}
mdToolbarDirective.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"];

})();