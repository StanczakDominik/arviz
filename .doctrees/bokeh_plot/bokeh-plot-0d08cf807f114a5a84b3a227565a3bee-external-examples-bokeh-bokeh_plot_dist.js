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
    
      
      
    
      var element = document.getElementById("75c75b3b-bfa6-49c1-8ec9-9f443d121e11");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '75c75b3b-bfa6-49c1-8ec9-9f443d121e11' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;195e0c4f-b344-4cf8-a1a2-ca0140355c13&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59236&quot;},{&quot;id&quot;:&quot;59237&quot;},{&quot;id&quot;:&quot;59238&quot;},{&quot;id&quot;:&quot;59239&quot;},{&quot;id&quot;:&quot;59240&quot;},{&quot;id&quot;:&quot;59241&quot;}]},&quot;id&quot;:&quot;59243&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59317&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59296&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59270&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59267&quot;},{&quot;id&quot;:&quot;59268&quot;},{&quot;id&quot;:&quot;59269&quot;},{&quot;id&quot;:&quot;59270&quot;},{&quot;id&quot;:&quot;59271&quot;},{&quot;id&quot;:&quot;59272&quot;}]},&quot;id&quot;:&quot;59274&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59304&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59224&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59222&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59314&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59317&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59318&quot;}},&quot;id&quot;:&quot;59295&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59289&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59229&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59259&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59262&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59219&quot;},{&quot;id&quot;:&quot;59250&quot;}]},&quot;id&quot;:&quot;59300&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59287&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59268&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59259&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59262&quot;},{&quot;id&quot;:&quot;59266&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59263&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59298&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59304&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59274&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59251&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59255&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59253&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59257&quot;}},&quot;id&quot;:&quot;59250&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59281&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59282&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59283&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59285&quot;}},&quot;id&quot;:&quot;59284&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59291&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59240&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59295&quot;}},&quot;id&quot;:&quot;59299&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59241&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59271&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59312&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59226&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59312&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59264&quot;}},&quot;id&quot;:&quot;59263&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59236&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59297&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59283&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59233&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59284&quot;}]},&quot;id&quot;:&quot;59294&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59242&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59291&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59233&quot;}},&quot;id&quot;:&quot;59232&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59228&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59231&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59251&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59310&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59260&quot;}},&quot;id&quot;:&quot;59259&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59253&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59237&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59273&quot;}},&quot;id&quot;:&quot;59269&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;2/l+arx0kz9YObTIdr6vPyPb+X5qvMQ/ppvEILByyD9CYOXQItvJP4cW2c73U8M/2c73U+Oluz+JQWDl0CKrP9nO91PjpZs/O99PjZdukj/6fmq8dJNoP/p+arx0k2g/AAAAAAAAAAAAAAAAAAAAAPyp8dJNYlA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[15]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59314&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59315&quot;}},&quot;id&quot;:&quot;59281&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59272&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59310&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59263&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59266&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59264&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59318&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59289&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59229&quot;}},&quot;id&quot;:&quot;59228&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59282&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59257&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59294&quot;}]},&quot;id&quot;:&quot;59293&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59239&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59220&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59267&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59232&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59235&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59260&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59295&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59296&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59297&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59299&quot;}},&quot;id&quot;:&quot;59298&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59242&quot;}},&quot;id&quot;:&quot;59238&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59315&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59281&quot;}},&quot;id&quot;:&quot;59285&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59273&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59255&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59228&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59231&quot;},{&quot;id&quot;:&quot;59235&quot;},{&quot;id&quot;:&quot;59293&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59232&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59284&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59287&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59243&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59220&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59224&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59222&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59226&quot;}},&quot;id&quot;:&quot;59219&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;}],&quot;root_ids&quot;:[&quot;59300&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"195e0c4f-b344-4cf8-a1a2-ca0140355c13","root_ids":["59300"],"roots":{"59300":"75c75b3b-bfa6-49c1-8ec9-9f443d121e11"}}];
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