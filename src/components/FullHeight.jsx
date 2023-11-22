import { useEffect } from 'react';
import $ from 'jquery';

const FullHeightComponent = () => {
  useEffect(() => {
    const fullHeight = () => {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
    };

    fullHeight();

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });

    // Cleanup function to remove event listener when component unmounts
    return () => {
      $(window).off('resize');
      $('#sidebarCollapse').off('click');
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return null;
};

export default FullHeightComponent;
