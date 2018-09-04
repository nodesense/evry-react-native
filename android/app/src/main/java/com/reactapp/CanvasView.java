package com.reactapp;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;

public class CanvasView extends FrameLayout {
    Bitmap bitmap = null;
    Canvas canvas = null;
    ImageView imageView = null;
    float angle = 0;
    int doneColor;
    int frontColor;
    float strokeWidth;

    // Dimensions for the underlying bitmap
    int mWidth = 100;
    int mHeight = 100;
    float mDensity = 1.0f;

    public CanvasView (Context context) {
        super(context);
        imageView = new ImageView(context);
        mDensity = getResources().getDisplayMetrics().density;
    }

    // Main function: draw "elapsed" part of the arc in doneColor,
    // and finish the remaining portion of the circle using frontColor
    public void drawArc() {
        removeAllViews();
        addView(
                imageView,
                new ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT)
        );

        int width = (int) (mWidth * mDensity);
        int height = (int) (mHeight * mDensity);

        bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);

        canvas = new Canvas(bitmap);
        imageView.setImageBitmap(bitmap);

        // Center the circle in the canvas
        float size = Math.min(width, height);
        float left = 0.5f * width - 0.4f * size;
        float right = 0.5f * width + 0.4f * size;
        float top = 0.5f * height - 0.4f * size;
        float bottom = 0.5f * height + 0.4f * size;
        RectF ovalBounds = new RectF(left, top, right, bottom);

        // Draw right part of the circle
        Paint paint = new Paint();
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(this.strokeWidth);
        paint.setARGB(Color.alpha(doneColor), Color.red(doneColor), Color.green(doneColor), Color.blue(doneColor));

        Path path = new Path();
        path.moveTo(left, top);
        path.addArc(ovalBounds, -90.0f, angle);
        canvas.drawPath(path, paint);

        // Draw the remaining arc
        paint.setARGB(Color.alpha(frontColor), Color.red(frontColor), Color.green(frontColor), Color.blue(frontColor));
        path = new Path();
        path.addArc(ovalBounds, angle - 90, 360 - angle);
        canvas.drawPath(path, paint);
    }

    // Just setter functions
    public void setAngle(float angle) {
        this.angle = angle;
    }

    public void setStrokeWidth(float width) {
        this.strokeWidth = width;
    }

    public void setWidth(int width) {
        this.mWidth = width;
    }

    public void setHeight(int height) {
        this.mHeight = height;
    }

    public void setDoneColor(String color) {
        doneColor = Color.parseColor(color);
    }

    public void setFrontColor(String color) {
        frontColor = Color.parseColor(color);
    }
}