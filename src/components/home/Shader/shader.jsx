import React from 'react';
import { Container } from 'react-bootstrap';
import { ShaderArt } from 'https://cdn.skypack.dev/shader-art';
import { UniformPlugin } from 'https://cdn.skypack.dev/@shader-art/plugin-uniform';

ShaderArt.register([() => new UniformPlugin()]);




const Shader = () => {
  return (
    <Container>
     <shader-art autoPlay="">
    <uniform type="float" name="scale" value=".4" min="0.1" max={4} step="0.01">
      <uniform type="float" name="ax" value={5} min={1} max={15} step=".01">
        <uniform type="float" name="ay" value={7} min={1} max={15} step=".01">
          <uniform type="float" name="az" value={9} min={1} max={15} step=".01">
            <uniform
              type="float"
              name="aw"
              value={13}
              min={1}
              max={15}
              step=".01"
            >
              <uniform
                type="float"
                name="bx"
                value={1}
                min={-1}
                max={1}
                step="0.01"
              >
                <uniform
                  type="float"
                  name="by"
                  value={1}
                  min={-1}
                  max={1}
                  step="0.01"
                >
                  <uniform type="color" name="color1" value="#ffffff">
                    <uniform type="color" name="color2" value="#ffafaf">
                      <uniform type="color" name="color3" value="#0099ff">
                        <uniform
                          type="color"
                          name="color4"
                          value="#aaffff"
                        ></uniform>
                      </uniform>
                    </uniform>
                  </uniform>
                </uniform>
              </uniform>
            </uniform>
          </uniform>
        </uniform>
      </uniform>
    </uniform>
  </shader-art>
    
    </Container>
  );
}

export default Shader;
