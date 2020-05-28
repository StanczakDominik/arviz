(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("72b12c80-9ff2-44f2-b3d6-260babab9289");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '72b12c80-9ff2-44f2-b3d6-260babab9289' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;97aba1fc-7209-4b47-a725-01ab3876fbad&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61710&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61692&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61709&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61742&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61686&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61715&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61738&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61743&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61708&quot;}},&quot;id&quot;:&quot;61712&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61714&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61677&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;PlculHSAtz9lof9uUXu4P43r0Ekudrk/tDWiJAtxuj/cf3P/52u7PwTKRNrEZrw/KxQWtaFhvT9TXuePfly+P3qouGpbV78/UfnEIhwpwD9kni2QiqbAP3hDlv34I8E/jOj+amehwT+gjWfY1R7CP7My0EVEnMI/x9c4s7IZwz/bfKEgIZfDP+8hCo6PFMQ/A8dy+/2RxD8WbNtobA/FPyoRRNbajMU/PrasQ0kKxj9SWxWxt4fGP1JbFbG3h8Y/UlsVsbeHxj8+tqxDSQrGPyoRRNbajMU/FmzbaGwPxT8Dx3L7/ZHEP+8hCo6PFMQ/23yhICGXwz/H1zizshnDP7My0EVEnMI/oI1n2NUewj+M6P5qZ6HBP3hDlv34I8E/ZJ4tkIqmwD9R+cQiHCnAP3qouGpbV78/U17nj35cvj8rFBa1oWG9PwTKRNrEZrw/3H9z/+druz+0NaIkC3G6P43r0Ekudrk/ZaH/blF7uD8+Vy6UdIC3Pz5XLpR0gLc/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[48]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALQLp8zf8QVAtAunzN/xBUA5D6rdpQ8GQIwzDZGXKAZATPZsUmNCBkACTjnII1oGQOTbKQ4fdAZAgjbuxi2NBkAu4WBvi6YGQAYDeqoHxAZA0ejYlpbiBkDUVcPhqP8GQPof/MjUHgdAYv6Gcvw7B0Be42xP/1gHQAU0+/nIcwdAsusecveMB0DzsdCoSaQHQO/dQJmKuQdAqgxpsafMB0BR3ioM6NsHQPszYc1s5wdASCdZ/jXuB0CsaBPyBvEHQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[48]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61738&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61739&quot;}},&quot;id&quot;:&quot;61713&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61673&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61708&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61709&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61710&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61712&quot;}},&quot;id&quot;:&quot;61711&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61736&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61713&quot;}},&quot;id&quot;:&quot;61717&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;ZgB+HiYFxz95peaLlILHP41KT/kCAMg/oe+3ZnF9yD+1lCDU3/rIP8k5iUFOeMk/3N7xrrz1yT/wg1ocK3PKPwQpw4mZ8Mo/GM4r9wduyz8sc5RkduvLPz8Y/dHkaMw/U71lP1PmzD9nYs6swWPNP3sHNxow4c0/j6yfh55ezj+iUQj1DNzOP7b2cGJ7Wc8/ypvZz+nWzz9vIKEeLCrQP/lyVVXjaNA/g8UJjJqn0D8NGL7CUebQP5dqcvkIJdE/Ib0mMMBj0T+rD9tmd6LRPzVij50u4dE/v7RD1OUf0j9IB/gKnV7SP0gH+AqdXtI/SAf4Cp1e0j+/tEPU5R/SPzVij50u4dE/qw/bZnei0T8hvSYwwGPRP5dqcvkIJdE/DRi+wlHm0D+DxQmMmqfQP/lyVVXjaNA/byChHiwq0D/Km9nP6dbPP7b2cGJ7Wc8/olEI9Qzczj+PrJ+Hnl7OP3sHNxow4c0/Z2LOrMFjzT9TvWU/U+bMPz8Y/dHkaMw/LHOUZHbryz8Yziv3B27LPwQpw4mZ8Mo/8INaHCtzyj/c3vGuvPXJP8k5iUFOeMk/tZQg1N/6yD+h77dmcX3IP41KT/kCAMg/eaXmi5SCxz9mAH4eJgXHP2YAfh4mBcc/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[60]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQ9xR0YkPk/JD3FHRiQ+T/4f1onlkb6P6g6JA0jBfs/aUEgtW3I+z+JSMzzLIz8P87YahzoVP0/KHQA2dUX/j9Oro5yK97+Py/YiY0hpP8/pSz56v4zAEC8vD5LRpQAQDtGxAVF8wBAMmW21ShSAUDP4nAuTa8BQEX0fQDoCgJA/V42ebVmAkBj8NxuysICQGo604opGwNA1m0pTIRwA0Cjm6lrBcUDQIpEaIPNFARAsucVc01gBEAwBkYieKcEQFNAsHx55wRAGwdiO+IjBUB2f1fiiVgFQCMAdsvVhgVA7G/pnyevBUAZ4GzQO9IFQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[60]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61740&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61741&quot;}},&quot;id&quot;:&quot;61718&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;2bUVbJ3Tbj9mfR9jnBd/P/APGgi1Yoc/LGGk3ps5jz81WZdaQYiTP9OB3MW0c5c/caohMShfmz8Q02acm0qfP9f91YMHm6E/J5J4OcGQoz92JhvveoalP8W6vaQ0fKc/FE9gWu5xqT9j4wIQqGerP7N3pcVhXa0/AgxIextTrz8oUHWYaqSwP1CaRnNHn7E/eOQXTiSasj+fLukoAZWzP8d4ugPej7Q/7sKL3rqKtT8WDV25l4W2PxYNXbmXhbY/Fg1duZeFtj/uwoveuoq1P8d4ugPej7Q/ny7pKAGVsz945BdOJJqyP1CaRnNHn7E/KFB1mGqksD8CDEh7G1OvP7N3pcVhXa0/Y+MCEKhnqz8UT2Ba7nGpP8W6vaQ0fKc/diYb73qGpT8nkng5wZCjP9f91YMHm6E/ENNmnJtKnz9xqiExKF+bP9OB3MW0c5c/NVmXWkGIkz8sYaTemzmPP/APGgi1Yoc/Zn0fY5wXfz/ZtRVsndNuP9m1FWyd024/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[48]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/y3oJF8AdAL/LegkXwB0C4rArUJu0HQPvMiNvX4gdAsP5JcjnWB0BPsO3jOsIHQBauGQL0pwdAncuSb6WJB0DzB3pjTGUHQJE63f4zPQdAxb1tiUYPB0Cysz92dOAGQGdSLEuHrwZAXLl4Nqh5BkAiTaCOakQGQDgp6qbVEgZAPULXc6njBUCPMGtAZLcFQMDaY5sIkAVA4m/ZH2xvBUAbNo7qpFMFQK7ei+q5PwVATktHeVsyBUB7FR1qri0FQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[48]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61736&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61737&quot;}},&quot;id&quot;:&quot;61708&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61720&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61697&quot;}},&quot;id&quot;:&quot;61691&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61699&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61689&quot;},{&quot;id&quot;:&quot;61690&quot;},{&quot;id&quot;:&quot;61691&quot;},{&quot;id&quot;:&quot;61692&quot;},{&quot;id&quot;:&quot;61693&quot;},{&quot;id&quot;:&quot;61694&quot;},{&quot;id&quot;:&quot;61695&quot;},{&quot;id&quot;:&quot;61696&quot;}]},&quot;id&quot;:&quot;61746&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61690&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61713&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61714&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61715&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61717&quot;}},&quot;id&quot;:&quot;61716&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61685&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61688&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61698&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61719&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61733&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[250]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXh8mk85CrP1eHyaTzkKs/bCbbeDDqqz+Yce+X/nCsPyhBXJcrI60/b4Ya7K8Hrj/v09k9njOvP1qJ9yQ9UbA/4ULUATUisT/F2zfLxAqyP5xKf2z6BrM/mC7EI6ELtD+VL4u6Dx21PwXojpIsKrY/dSGvZHIotz+nrV/euAy4P9RVRtWpxrg/EoecjfZfuT9q0dWD0cu5P9VWW35G8bk/U6EAtGjnuT9aGMYx/qW5Pw+5V/wZM7k/Um/3EBCJuD8mY+mTiLi3P9kIivEY5rY/vMR2jz8Otj8pOBcUKE21PyKTv6lVsLQ/DDVimvlBtD8LOIWbVh60P49wkGUxXbQ/KxX12GT4tD/9mrFfnve1P1t+SwXOarc/9igesGM6uT95DznrlpG7P340e4BnSb4/8ctdSCyhwD+UbanV0UnCP97aJSP+EcQ/dw7PftXrxT9oWOpUsuHHP3U+KFfx3Mk/KNC2I2Xjyz9JcdNkBfPNPx6eC2F8B9A/TMFMg3Qb0T+LDLBDbC/SP6C3dxnJRNM/s9xpKH9c1D/Gk5b9337VPwbqCTB9ndY/S7OMcNq41z8keet/5trYP4AInWkd8dk/785rFB7/2j9JqcFSwgXcP8qgpJbpAd0/wdG+FYDu3T9Sos1IVsveP7U/olZsm98/ulZlBjos4D/h+Yd2nIXgPydpTnS81eA/Be9qQxkh4T/N1fv8qWXhP0GkYLknpOE/9XjmL/Th4T+nYK2kbRviP6/FziJSUOI/h5nVFO+E4j/6M0+a3LviP4oVhF0I8+I/pQCUc3cp4z8FvShEM2PjPzXqKeihneM/sDDOxtrf4z/jX4ypNijkP7cS3XvrdOQ/n+231m3I5D/R5Tc6vCTlP0ngvzp9juU/7qnAhgL+5T+T6QDmqXXmP8C7hJs27OY/+dyjwaZq5z9WF9wVI/LnPxIaNcyNeeg/domcz/0A6T9BkucuPonpP8ubCNqYD+o/mP843oOR6j8XmpONyBbrP7oHdt+Smus/aBl+20Ec7D/tRLTsppnsPzrGsTdcF+0/SiUsLoWX7T9/xi7xnxnuP8VobZVNmO4/+fMQHiUg7z94EReQAqrvPxFcHlxpHPA/mpHiYO9m8D/J3RKgVbPwP1bzBJ6b//A/4Y+Dr45P8T+jpAzmWKDxP2wjv/j+9PE/Og6FW1FK8j+M4bkDfqTyP8XaYJc2APM/3eZhwcBd8z9jgfO+Yb3zP5oCttRGIvQ/5XObv4yL9D/VngGYpPr0P0E5NSHub/U/Tx1p7n/t9T/AoeBuiHL2P0vCkkUEAfc/jvns8t2W9z8kJ0DCzjb4P4Von9sk3/g/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[250]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61742&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61743&quot;}},&quot;id&quot;:&quot;61723&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61739&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61725&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61697&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61718&quot;}},&quot;id&quot;:&quot;61722&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61718&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61719&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61720&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61722&quot;}},&quot;id&quot;:&quot;61721&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61681&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61684&quot;},{&quot;id&quot;:&quot;61688&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61685&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61711&quot;},{&quot;id&quot;:&quot;61716&quot;},{&quot;id&quot;:&quot;61721&quot;},{&quot;id&quot;:&quot;61726&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61729&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61699&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61673&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61677&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61675&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61679&quot;}},&quot;id&quot;:&quot;61672&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61724&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;61746&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;61747&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61733&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61686&quot;}},&quot;id&quot;:&quot;61685&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61679&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61723&quot;}},&quot;id&quot;:&quot;61727&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61689&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61723&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61724&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61725&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61727&quot;}},&quot;id&quot;:&quot;61726&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61737&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61729&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61731&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61682&quot;}},&quot;id&quot;:&quot;61681&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61695&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61675&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61682&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61740&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61741&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61681&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61684&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61689&quot;},{&quot;id&quot;:&quot;61690&quot;},{&quot;id&quot;:&quot;61691&quot;},{&quot;id&quot;:&quot;61692&quot;},{&quot;id&quot;:&quot;61693&quot;},{&quot;id&quot;:&quot;61694&quot;},{&quot;id&quot;:&quot;61695&quot;},{&quot;id&quot;:&quot;61696&quot;}]},&quot;id&quot;:&quot;61699&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;61747&quot;},{&quot;id&quot;:&quot;61745&quot;}]},&quot;id&quot;:&quot;61748&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61696&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61672&quot;},0,0]]},&quot;id&quot;:&quot;61745&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61694&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61698&quot;}},&quot;id&quot;:&quot;61693&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61731&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;61748&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"97aba1fc-7209-4b47-a725-01ab3876fbad","root_ids":["61748"],"roots":{"61748":"72b12c80-9ff2-44f2-b3d6-260babab9289"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();