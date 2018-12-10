/**
 * Class controls cache for UV mapping from Texture normal space to BaseTexture normal space.
 *
 * @class
 * @memberof PIXI
 */
export default class MeshBatchUvs
{
    /**
     * @param {PIXI.Buffer} uvBuffer - Buffer with normalized uv's
     * @param {PIXI.TextureMatrix} uvMatrix - Material UV matrix
     */
    constructor(uvBuffer, uvMatrix)
    {
        this.uvBuffer = uvBuffer;

        this.uvMatrix = uvMatrix;

        this.data = null;

        this._bufferUpdateId = -1;

        this._textureUpdateId = -1;

        this._updateID = 0;
    }

    /**
     * updates
     *
     * @param {boolean} forceUpdate - force the update
     */
    update(forceUpdate)
    {
        if (!forceUpdate
            && this._bufferUpdateId === this.uvBuffer._updateID
            && this._textureUpdateId === this.uvMatrix._updateID)
        {
            return;
        }

        const data = this.uvBuffer.data;

        if (!this.data || this.data.length !== data.length)
        {
            this.data = new Float32Array(data.length);
        }

        this.uvMatrix.multiplyUvs(data, this.data);

        this._updateID++;
    }
}