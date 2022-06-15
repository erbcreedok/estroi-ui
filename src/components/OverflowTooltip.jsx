import {Box, Tooltip} from "@mui/material";
import {useCallback, useEffect, useRef, useState} from "react";
import {useResizeDetector} from "react-resize-detector";

export const OverflowTooltip = ({ text }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const handleResize = useCallback(() => {
    const scrollWidth = ref.current?.scrollWidth
    const widthContainer = Math.ceil(
      ref.current?.getBoundingClientRect().width
  )
    setVisible(widthContainer < scrollWidth)
  }, [])

  useResizeDetector({
    onResize: handleResize,
    handleWidth: true,
    handleHeight: false,
    targetRef: ref,
  })

  useEffect(() => {
    if (text) {
      handleResize()
    } else {
      setVisible(false)
    }
  }, [handleResize, text])

  const Wrapper = ({ children }) => visible
    ? <Tooltip hide={!visible} title={text} placement="right">{children}</Tooltip>
    : children

  return (
    <Wrapper>
      <Box ref={ref} textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
        {text}
      </Box>
    </Wrapper>
  )
}
