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
    
      
      
    
      var element = document.getElementById("97c3fa73-4c03-46e6-b556-24e65ad18186");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '97c3fa73-4c03-46e6-b556-24e65ad18186' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;a8e356ab-1c07-497b-b410-67ed0e6bcd09&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60741&quot;}},&quot;id&quot;:&quot;60735&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60734&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60742&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60754&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60717&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60733&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60740&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60765&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60772&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60738&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60742&quot;}},&quot;id&quot;:&quot;60737&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60736&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60739&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60753&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60773&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60733&quot;},{&quot;id&quot;:&quot;60734&quot;},{&quot;id&quot;:&quot;60735&quot;},{&quot;id&quot;:&quot;60736&quot;},{&quot;id&quot;:&quot;60737&quot;},{&quot;id&quot;:&quot;60738&quot;},{&quot;id&quot;:&quot;60739&quot;},{&quot;id&quot;:&quot;60740&quot;}]},&quot;id&quot;:&quot;60743&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60767&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60752&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60753&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60754&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60756&quot;}},&quot;id&quot;:&quot;60755&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;ee+cjfFrBMAPIOxfJ6kDwB2n9I1ZSADAgYPaGbQ+AMB1SPXluA4AwK2BuLqxqPu/FERz+WaD+7+AcPyqvlj5vyASkjQVx/e/Sfj425q89785imXuQQz3v+pe+H7WZPS/x3ctTm8A878K0RLytt/xv2/D1k0IgvG/o0Z5KgUL8b84LfS/IN7wvxUR3uB0Ue6/Nb4/fhbL7L93P2J2NCfrvx3EFDBr++m/ac95HiSw578K3RBwzKvnv68YyvyZR+e/tTnQduoJ5r/roeGzvZHlv3e6DSZZX+W/2xuZjFn/5L8PJYo/MLvkv6lM7irjd+K/mkTXa77+4b+YSLPFvlbhv9WyEZAdJt6/oshZNWLz2L95JL5URKPYv9CdA4h3odi/KZm4/GsB179SaC28luXVv2Wf8lg2KdW/4DyQBbUt1L+v3BcQsW/SvwG8li8BUtK/iofRs85A0L9a32sxIrrNv+yodWRLv8u/r1ozvtQ6y7+0oXLwQw7Lvw7aZef0hrO/PH8mkKF4rb8jk7M93Gqtv07BVAsxF54/ADvLqfHktD+t8rWASmvPP88Yx9uJ688/4VzzfWhf0D9Beq2HkDLRP11odz9cPNE/cWv6ilkX0j8EIr3h7U7UPxED3q64d9Q/7oZoiZQy1T9eZMlsDkXVP9DyxSHFrNU/ha2RhUH61T8dLWWZhVDWP7PfP/Jpu9c/CB2QnhUk2T+XMhUlzhTaP+IykSu5NNs/Qn+21Ji42z8GWoiGo/TdP3bGsHmpfN4/D8YF87z84D9BcHAYPZ3hP6RV6LCze+Q/dQ2zN06/5T9gePCDRNTlP03P9oaoYOY/SAXFYKo95z+JVE23WmznPybvT+Co7Og/WErle6Uj6T8dcGaV3fjqP7bfVsOBYO0/ypqA5glM7j9zeGnZbQTvP+1hBB56ze8/XfZCGMXn8D9nZIs6IpjxPzqtnKdyqvE/1hujvepY9D8+B1gWtgn1PxL26aAj3fc/0JhNsGQf+D/fR7EP3kX6P0h8imBDEvs/4Vkxo9Eg+z97zjIYLOL8P5ARbCRlJ/4/C2m3DJrF/j8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;DiHG5Bwo5z/ivydAsa3oP8axFuRMb+8//vhKzJeC7z8WbxU0juLvPyq/oyKnK/I/9l1Gg0w+8j/Ax4GqoFPzP/D2tmV1HPQ/3IMDkrIh9D/kOs0I33n0P4vQg8CUzfU/HETpWMh/9j97l/aGJBD3P0ieFNn7Pvc/rlzDan169z9k6QWg75D3P7t7yMeia/g/cxBwYDrN+D8icGfiMjb5P/nO+jMlgfk/Joxh+PYT+j++yPvjDBX6P9R5zYAZLvo/k/FLYoV9+j+FlweTkJv6P2KRfLYpqPo/CbnZnCnA+j+8dh3wM9H6P9ZsRDUHYvs/2i4KZVCA+z/aLZNOUKr7P6XJ/U08O/w/7MZUuZPh/D9xO2h1l+v8P0aM/w7R6/w/2+xogNIf/T/2UnooTUP9PxOs4TTZWv0/ZPhNX0l6/T9qBP3dCbL9P4AoDdq/tf0/D8+FKeb3/T8KQuncXST+P3GluEkLRP4/VcoctFJM/j/l1fjAG0/+PzDRxFjIY/8/A2a/eR2K/z+zMQmPVIr/P8FUCzEXHgBA7CynxpNTAECVrwVUWvsAQMY43k5c/wBAzjXfh/YFAUCk13oIKRMBQIZ298PFEwFAt6avmHUhAUAg0hve7kQBQDHg7Yp7RwFAb4iWSClTAUBGlszmUFQBQC1fHFLMWgFA2BpZGKRfAUDSUpZZCGUBQPv9I5+2ewFA0AHpWUGSAUApU1HiTKEBQC4TuZJLswFA9GdLjYm7AUCghWg4St8BQGcMm5fK5wFAwrhgnpcfAkAIDg6jpzMCQLQKHXZ2jwJAr2H2xum3AkAMD36QiLoCQOrZ3hAVzAJAqaAYTLXnAkCRqulWi+0CQOX9CRyVHQNAS6l8r3QkA0AEzqyyG18DQPfbajgQrANAWRPQPIHJA0AOLy27jeADQD6MwEOv+QNAl70QRvE5BEAa2aKOCGYEQE4r56mcagRA9sZorzoWBUDQAZaFbUIFQIR9OuhI9wVANGYTLNkHBkD4UeyDd5EGQBKfItiQxAZAeFbMaDTIBkCfswwGizgHQGQEG0nZiQdAQ9otg2axB0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60772&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60773&quot;}},&quot;id&quot;:&quot;60757&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60752&quot;}},&quot;id&quot;:&quot;60756&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60757&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60758&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60759&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60761&quot;}},&quot;id&quot;:&quot;60760&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60758&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60723&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60725&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60728&quot;},{&quot;id&quot;:&quot;60732&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60729&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60755&quot;},{&quot;id&quot;:&quot;60760&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60763&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60743&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60717&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60721&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60719&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60723&quot;}},&quot;id&quot;:&quot;60716&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60763&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60741&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60721&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60725&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60728&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60757&quot;}},&quot;id&quot;:&quot;60761&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60765&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60726&quot;}},&quot;id&quot;:&quot;60725&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60759&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60729&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60732&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60719&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60730&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60770&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60767&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60730&quot;}},&quot;id&quot;:&quot;60729&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60771&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60726&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60770&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60771&quot;}},&quot;id&quot;:&quot;60752&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;}],&quot;root_ids&quot;:[&quot;60716&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"a8e356ab-1c07-497b-b410-67ed0e6bcd09","root_ids":["60716"],"roots":{"60716":"97c3fa73-4c03-46e6-b556-24e65ad18186"}}];
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